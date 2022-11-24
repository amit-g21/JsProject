let userName = document.querySelector('#userName');
let password = document.querySelector('#password');
let checkPassword = document.querySelector('#checkPassword')
let email = document.querySelector('#email')
let number = document.querySelector('#phoneNum')
let btn = document.querySelector('#signUpBtn');




function push(){
    let userObj =  {
        username: userName.value, 
        password: password.value,
        checkPassword :checkPassword.value,
        email : email.value,
        number : number.value
    }
    for (key in userObj) {
        if(userObj[key] == ''){
            return;
        }

    }
    let detalis = [];
    detalis.push(userObj);
    localStorage.setItem(userName.value , JSON.stringify(detalis));
    userName.value = '';
    password.value = '';
    checkPassword.value = '';
    email.value = '';
    number.value = '';
    window.location.replace('../homePage/homePage.html')

}


btn.addEventListener('submit' , push);