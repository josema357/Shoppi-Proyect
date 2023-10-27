import "./MenuMobile.css";
import { useContext } from "react";
import { ShoppingContext } from "../../Context/Context";
import { NavLink } from "react-router-dom";
import { checkIfHasAccount } from "../../Utils/checkIfHasAccount";

function MenuMobile() {
  const context = useContext(ShoppingContext);
  //Sesion cerrada
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;
  //Tiene una cuenta
  const returnedObject = checkIfHasAccount(context.account);
  const hasUserAnAccount = returnedObject.hasUserAnAccount;
  /**
   * Esta funcion cierra la sesion del usuario
   */
  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };
  /**
   * Esta funcion oculta el menu mobile
   */
  const closeMobileMenu = () => {
    context.setMenuMobile(false);
  };
  /**
   * Condicional para renderizar dependiendo de la variable "isUserSignOut"
   */
  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li>
            <NavLink onClick={() => closeMobileMenu()} to="/my-orders">
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => closeMobileMenu()} to="/my-account">
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              onClick={() => {
                handleSignOut();
                closeMobileMenu();
              }}
            >
              Sign out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            onClick={() => {
              handleSignOut();
              closeMobileMenu();
            }}
          >
            Sign in
          </NavLink>
        </li>
      );
    }
  };

  return (
    <aside
      className={`${
        context.menuMobile ? "flex" : "hidden"
      } product-detail flex-col overflow-y-auto fixed left-0 borde rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-md">Menu</h2>
      </div>
      <div>
        <ul className="flex flex-col gap-3 p-4 text-md">
          <li>
            <NavLink
              to="/"
              onClick={() => {
                context.setSearchByCategory("");
                context.setSearchByTitle("");
                closeMobileMenu();
              }}
              className="block w-full"
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clothes"
              onClick={() => {
                context.setSearchByCategory("clothes");
                context.setSearchByTitle("");
                closeMobileMenu();
              }}
              className="block w-full"
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/electronics"
              onClick={() => {
                context.setSearchByCategory("electronics");
                context.setSearchByTitle("");
                closeMobileMenu();
              }}
              className="block w-full"
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/furniture"
              onClick={() => {
                context.setSearchByCategory("furniture");
                context.setSearchByTitle("");
                closeMobileMenu();
              }}
              className="block w-full"
            >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys"
              onClick={() => {
                context.setSearchByCategory("toys");
                context.setSearchByTitle("");
                closeMobileMenu();
              }}
              className="block w-full"
            >
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/others"
              onClick={() => {
                context.setSearchByCategory("others");
                context.setSearchByTitle("");
                closeMobileMenu();
              }}
              className="block w-full"
            >
              Others
            </NavLink>
          </li>
        </ul>
        <br />
        <ul className="flex flex-col gap-3 p-4 text-md">{renderView()}</ul>
      </div>
    </aside>
  );
}

export { MenuMobile };
