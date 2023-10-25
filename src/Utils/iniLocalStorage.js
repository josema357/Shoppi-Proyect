export const initializeLocalStorage=()=>{
    const accountInLocal=localStorage.getItem('account');
    const signOutInLocal=localStorage.getItem('sign-out');

    if(!accountInLocal){
        localStorage.setItem('account',JSON.stringify({}));
    }
    if(!signOutInLocal){
        localStorage.setItem('sign-out',JSON.stringify(false));
    }
}