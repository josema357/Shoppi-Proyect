import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingContext } from "../../Context/Context";

const CreateUser = ({parsedAccount, handleSignIn}) => {
    const context=useContext(ShoppingContext);
    const form=useRef(null);
    /**
     * Obtenemos los datos del formulario
     * @returns 
     */
    const createAnAccount = () => {
		const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}
        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account', stringifiedAccount)
        context.setAccount(data)
        // Sign In
        handleSignIn()
    }
  return (
    <form ref={form} className="flex flex-col gap-4 w-full px-1 max-w-sm">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-light text-sm">
          Your name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={parsedAccount?.name}
          placeholder="Peter"
          required
          className="rounded-lg border border-black placeholder:font-light
            placeholder:text-sm placeholder:text-black/60 focus:outline-none p-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-light text-sm">
          Your email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          defaultValue={parsedAccount?.email}
          placeholder="hi@helloworld.com"
          required
          className="rounded-lg border border-black
            placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none p-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-light text-sm">
          Your password:
        </label>
        <input
          type="text"
          id="password"
          name="password"
          defaultValue={parsedAccount?.password}
          placeholder="******"
          required
          className="rounded-lg border border-black
            placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none p-2"
        />
      </div>
      <Link to="/">
        <button
          className="bg-black text-white w-full rounded-lg py-3"
          onClick={() => createAnAccount()}
        >
          Create
        </button>
      </Link>
    </form>
  );
};

CreateUser.propTypes=null;

export { CreateUser };
