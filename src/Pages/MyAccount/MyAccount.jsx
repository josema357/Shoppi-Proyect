import { useContext, useRef, useState } from "react";
import { ShoppingContext } from "../../Context/Context";
import { checkIfHasAccount } from "../../Utils/checkIfHasAccount";
import { UserInfo } from "../../Components/UserInfo/UserInfo";
import { UserInfoEdit } from "../../Components/UserInfoEdit/UserInfoEdit";

function MyAccount() {
  const context=useContext(ShoppingContext);
  const [view, setView] = useState('user-info');
  //Cuenta
  const returnedObject=checkIfHasAccount(context.account);
  const parsedAccount=returnedObject.parsedAccount;
  const form = useRef(null);
  /**
   * Esta funcion actualiza los datos de la cuenta
   */
  const editAccount=()=>{
    const formData= new FormData(form.current);
    const data={
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    //Actualizar cuenta
    const stringifiedAccount=JSON.stringify(data);
    localStorage.setItem('account',stringifiedAccount);
    context.setAccount(data);
  }

  const renderEditUser=()=>{
    return (
      <UserInfoEdit 
      form={form}
      parsedAccount={parsedAccount}
      setView={setView}
      editAccount={editAccount}/>
    )
  }
  const renderUserInfo=()=>{
    return (
      <UserInfo 
      parsedAccount={parsedAccount} 
      setView={setView} />
    )
  }

  const renderView=()=> view==='edit-user-info' ? renderEditUser() : renderUserInfo();

  return (
    <>
      <h1 className="font-medium text-xl text-center mb-6 w-full">My Account</h1>
      {renderView()}
    </>
  )
}

export {MyAccount};