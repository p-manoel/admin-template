import router from "next/router";
import Head from "next/head";
import useAuth from "../../data/hook/useAuth";

export default function ForceAuth(props: any) {
  const { user, loading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <script 
            dangerouslySetInnerHTML={{
              __html: `
                if(!document.cookie?.includes("admin-template-auth")) {
                  window.location.href = "/authentication";
                }
              `
            }}
          />
        </Head>
        {props.children}
      </>
    )
  }

  function renderLoadingScreen() {
    return (
      <div className={`
        flex
        justify-center items-center
        h-screen w-screen
        bg-gray-300
      `}>
        <div className="animate-spin h-5 w-5 bg-gray-800" />
        <div className="animate-spin h-5 w-5 bg-gray-800" />
        <div className="animate-spin h-5 w-5 bg-gray-800" />
      </div>
    )
  }

  if(!loading && user?.email) {
    return renderContent();
  } else if(loading) {
    return renderLoadingScreen();
  } else {
    router.push('/authentication');
    return null;
  }

}