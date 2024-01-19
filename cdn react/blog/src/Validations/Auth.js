
function setLogin(){
    localStorage.setItem('login',true);
}

function isLogin(){
    let login = localStorage.getItem('login');
    if (login) {
        return login
    }
    return false;
}

function logOut(){
        localStorage.clear();
}

export {setLogin, isLogin, logOut}
