import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconExclamation, IconGoogle } from "../components/icons";
import useAppData from "../data/hook/useAppData";
import useAuth from "../data/hook/useAuth";

interface AuthenticationProps {

}

export default function Authentication(props: AuthenticationProps) {
  const { signup, login, googleLogin } = useAuth();

  const [authenticationType, setAuthenticationType] = useState<'login' | 'signup'>('login');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function showError(message: string, duration = 7) {
    setError(message);
    setTimeout(() => setError(''), duration * 1000);
  }

  async function submit() {
    try {
      if(authenticationType === 'login') {
        await login(email, password);
      } else {
        await signup(email, password)
      }
    } catch(e: any) {
      showError(e?.message ?? 'Unknown erro!');
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" hidden md:block md:w-1/2 lg:w-2/3">
        <img src="https://source.unsplash.com/random"
        alt="Authentication screen Image"
        className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`
        text-4xl font-bold
        mb-5
      `}>
          {authenticationType === 'login' ? 'Login' : 'Signup'}
        </h1>
        
        {error ? (
          <div className={`
          flex
          items-center
          bg-red-400
          text-white
          py-3 px-5 my-2
          border-2 border-red-700 rounded-lg`}>
            {IconExclamation(8)}
            <span className="ml-3">{error}</span>
          </div>
        ) : false}
        

        <AuthInput
          type="email"
          label="Email"
          value={email}
          onChange={setEmail}
          required
        />
        <AuthInput
          type="password"
          label="Password"
          value={password}
          onChange={setPassword}
          required
        />

        <button onClick={submit} className={`
        w-full 
        bg-indigo-500 hover:bg-indigo-400
        text-white
        px-4 py-3 mt-6
        rounded-lg
      `}>
          {authenticationType === 'login' ? 'Login' : 'Signup'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button onClick={googleLogin} className={`
        flex
        justify-center items-center
        w-full 
        bg-red-500 hover:bg-red-400
        text-white
        px-4 py-3 mt-6
        rounded-lg
      `}>
          Log in with Google <span className="ml-2">{IconGoogle(24)}</span>
        </button>

        {authenticationType === 'login' ? (
          <p className="mt-8">
            Are you new here?
            <a onClick={() => setAuthenticationType('signup')} className={`
              text-blue-500 hover:text-blue-700 
              font-semibold 
              cursor-pointer
            `}> Create an account free</a>
          </p>
        ) : (
          <p className="mt-8">
            Are you already know us?
            <a onClick={() => setAuthenticationType('login')} className={`
              text-blue-500 hover:text-blue-700 
              font-semibold 
              cursor-pointer
            `}> Log in</a>
          </p>
        )}
      </div>
    </div>

  )
}