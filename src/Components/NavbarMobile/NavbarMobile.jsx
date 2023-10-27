import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../../Context/Context";
import { Bars4Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { checkIfHasAccount } from "../../Utils/checkIfHasAccount";

function NavbarMobile() {
  const context = useContext(ShoppingContext);
  const activeStyle = "underline underline-offset-4";
  //Sesion cerrada
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;
  //Tiene una cuenta
  const returnedObject = checkIfHasAccount(context.account);
  const hasUserAnAccount = returnedObject.hasUserAnAccount;
  /**
   * Esta funcion muestra u oculta el checkout
   */
  const handleCart = () => {
    context.setCheckoutSideOpen(!context.checkoutSideOpen);
  };
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
          <li
            className="flex items-center cursor-pointer"
            onClick={() => {
              handleCart();
              closeMobileMenu();
            }}
          >
            <ShoppingCartIcon className="h-6 w-6 text-black" /> {context.count}
          </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
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
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white border-b border-b-slate-200 min-[751px]:hidden">
      <ul className="flex items-center gap-3">
        <li
          onClick={() => {
            context.setMenuMobile(!context.menuMobile);
            context.setCheckoutSideOpen(false);
          }}
        >
          <Bars4Icon className="h-6 w-6 text-black cursor-pointer" />
        </li>
        <li className="font-semibold text-lg">
          <NavLink
            to={`${isUserSignOut ? "/sign-in" : "/"}`}
            onClick={() => {
              context.setSearchByCategory("");
              context.setSearchByTitle("");
              closeMobileMenu();
            }}
          >
            Shoppi
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">{renderView()}</ul>
    </nav>
  );
}

export { NavbarMobile };
