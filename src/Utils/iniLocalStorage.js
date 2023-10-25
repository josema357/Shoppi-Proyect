export const initializeLocalStorage=()=>{
    const accountInLocal=localStorage.getItem('account');
    const signOutInLocal=localStorage.getItem('sign-out');
    //let parsedAccount;
    //let parsedSignOut;
    if(!accountInLocal){
        localStorage.setItem('account',JSON.stringify({}));
        //parsedAccount={};
    }else{
        //parsedAccount =JSON.parse(accountInLocal);
    }
    if(!signOutInLocal){
        localStorage.setItem('sign-out',JSON.stringify(false));
        //parsedSignOut=false;
    }else{
        //parsedSignOut = JSON.parse(signOutInLocal);
    }
}