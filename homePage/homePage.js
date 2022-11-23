let userNameLog = document.querySelector('#userNameHome');
let passwordLog = document.querySelector('#passwordHome');
let homeBtn = document.querySelector('#logInBtn')

homeBtn.addEventListener('click' , checkDetalis)


function checkDetalis(){
    let reco =  JSON.parse(localStorage.getItem(userNameLog.value));
    console.log(reco)
    let objPass = reco[0]['password']
    console.log(objPass)
    if(reco != null && objPass === passwordLog.value){
        console.log('good')
    }else{
        console.log('kaki')
    }
}

