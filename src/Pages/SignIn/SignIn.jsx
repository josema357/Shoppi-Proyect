import { useContext, useState } from "react";
import { ShoppingContext } from "../../Context/Context";
import { Login } from "../../Components/Login/Login";
import { CreateUser } from "../../Components/CreateUser/CreateUser";
import { Navigate } from "react-router-dom";
import { checkIfHasAccount } from "../../Utils/checkIfHasAccount";

function SignIn() {
  const context = useContext(ShoppingContext);
  const [view, setView] = useState("user-info");
  //Tiene una cuenta 
  const returnedObject = checkIfHasAccount(context.account);
  const hasUserAnAccount=returnedObject.hasUserAnAccount;
  //Cuenta
  const parsedAccount=returnedObject.parsedAccount;
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
      <h1 className="font-medium text-xl text-center mb-6 w-full">Welcome</h1>
      {renderView()}
    </>
  );
}

export { SignIn };
