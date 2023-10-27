import { Link } from "react-router-dom";


const Login = ({parsedAccount, hasUserAnAccount, setView, handleSignIn}) => {
  return (
    <div className="flex flex-col w-full px-1 max-w-sm">
        <p className="flex flex-col mb-3">
          <span className="font-light text-sm">Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p className="flex flex-col mb-3">
          <span className="font-light text-sm">Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link to="/">
          <button
            className="bg-black disabled:bg-black/40 text-white  w-full rounded-lg py-3 mt-4 mb-2"
            disabled={!hasUserAnAccount}
            onClick={()=>handleSignIn()}
          >
            Log in
          </button>
        </Link>
        <div className="text-center">
          <a
            className="font-light text-xs underline underline-offset-4"
            href=""
          >
            Forgot my password
          </a>
        </div>
        <button
          className="border border-black disabled:text-black/40 disabled:border-black/40
          rounded-lg mt-6 py-3"
          onClick={()=>setView('create-user')}
          disabled={hasUserAnAccount}
        >
          Sign up
        </button>
      </div>
  )
}

//Desabilitar las comprobaciones de Proptypes para este componente
Login.propTypes=null;

export {Login};