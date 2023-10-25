export const checkIfHasAccount=(contextAccount)=>{
    //Obtener cuenta y parsear
    const account=localStorage.getItem('account');
    const parsedAccount=JSON.parse(account);
    //Verificar si tiene una cuenta
    const hasUserAnAccount = Object.keys(parsedAccount).length > 0 || Object.keys(contextAccount).length > 0;

    return {hasUserAnAccount, parsedAccount};
}