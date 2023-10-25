import { useContext, useState } from "react";
import { ShoppingContext } from "../../Context/Context";
import { Login } from "../../Components/Login/Login";
import { CreateUser } from "../../Components/CreateUser/CreateUser";
import { Navigate } from "react-router-dom";

function SignIn() {
  const context = useContext(ShoppingContext);
  const [view, setView] = useState("user-info");
  //Cuenta
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account) || {};
  //Tiene una cuenta
  const hasUserAnAccount =
    Object.keys(parsedAccount).length > 0 ||
    Object.keys(context.account).length > 0;
  /**
   * Actualiza el local Storage y el estado global de sign-out
   */
  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(false);
    //Redirigir a Home
    return <Navigate replace to={"/"} />;
  };
  /**
   * Esta funcion renderiza la vista dependiendo del estado de "view"
   */
  const renderLogin = () => {
    return (
      <Login
        parsedAccount={parsedAccount}
        hasUserAnAccount={hasUserAnAccount}
        setView={setView}
        handleSignIn={handleSignIn}
      />
    );
  };
  const renderCreateUser = () => {
    return <CreateUser 
        parsedAccount={parsedAccount}
        handleSignIn={handleSignIn} />;
  };

  const renderView = () =>
    view === "create-user" ? renderCreateUser() : renderLogin();

  return (
    <>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {renderView()}
    </>
  );
}

export { SignIn };
