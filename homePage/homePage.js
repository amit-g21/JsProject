let userNameLog = document.querySelector('#userNameHome');
let passwordLog = document.querySelector('#passwordHome');
let homeBtn = document.querySelector('#logInBtn');


homeBtn.addEventListener('click' , checkDetalis)


function checkDetalis(){
    let reco =  JSON.parse(localStorage.getItem(userNameLog.value));
    if(reco === null){
        return alert('Wrong user name or Password. Please try Again');
    }
    let objPass = reco[0]['password'];
    if(reco != null && objPass === passwordLog.value){
        window.location.href = '../gamePage/mainPage.html';
    }
    else{
        return alert('Wrong user name or Password. Please try Again');
    }
}

