import  router  from "next/router";
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import User from "../../model/User";
import Cookies from "js-cookie";

interface AuthContextProps {
  user?: User
  loading?: boolean
  signup?: (email: string, password: string) => Promise<void>
  googleLogin?: () => Promise<void>
  login?: (email: string, password: string) => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({});

async function normalizedUser(firebaseUser: firebase.User) {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0]?.providerId,
    urlImage: firebaseUser.photoURL
  }
}

function manageCookie(logged: boolean) {
  if(logged) {
    Cookies.set('admin-template-auth', logged, {
      expires: 7
    });
  } else {
    Cookies.remove('admin-template-auth');
  }
}

export function AuthProvider(props: AuthContextProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>();

  async function manageSession(firebaseUser: firebase.User | null) {
    if(firebaseUser?.email) {
      const user = await normalizedUser(firebaseUser);
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  }

  async function signup(email, password) {
    try {
      setLoading(true);

      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await manageSession(response.user);

      router.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function googleLogin() {
    try {
      setLoading(true);

      const response = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      await manageSession(response.user);

      router.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    try {
      setLoading(true);
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      await manageSession(response.user);

      router.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await manageSession(null);

      router.push('/authentication');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(Cookies.get('admin-template-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(manageSession);
      return () => cancel();
    } else {
      setLoading(false);
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signup,
      googleLogin,
      login,
      logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}


export default AuthContext;