let ballContainer = document.querySelector('#gameBallContainer');
let basket = document.querySelector('#basketContainer');
let ball = document.querySelector('#basketball');
let scoreHtml = document.querySelector('p');
let num = window.innerWidth / 2.7;
let width = window.innerWidth - 550;
let middle = basket.style.left;
let topTouchBall = window.innerHeight
let direction = 'right';
let move = 'up'
let touchLeft = 0
let numBottom = 7
let general = window.innerWidth / 7;
let centersmall = window.innerWidth / 2 - 180;
let centerright = window.innerWidth / 2 + 60;
ball.style.height = general;
let score = 0;
let points = 0;
let life = 3;
let degree = 0;
let audio = new Audio('../images/swooshAud.mp3')
scoreHtml.innerText = `Score:${score}`;

setInterval(moveBasket , 10)

function moveBasket(){
    if(num >= width){
        direction = 'left';
    }
    if(num <= touchLeft){
        direction = 'right'
    }
    if(direction === 'right'){
        num+= 5;
    }else{
        num-= 5;
    }
    basket.style.left = num + 'px';
    
};

function wasBasket(){

}

function resetBall() {
    ballContainer.style.width = 20 + 'vh';
    ballContainer.style.height = 'auto';
    ballContainer.style.bottom = 7 + 'vh';
    ballContainer.style.left = 45 + 'vw';
    ballContainer.style.zIndex = 4;
    ball.style.height = 20 + 'vh';
    ball.style.width = 'auto';
    numBottom = 90;
    general = window.innerWidth / 7;
    move = 'up'
}

function BallDirectionAndSize(){
    general -= 1.3;

    if(numBottom < 500){
        move = 'up';
    }
    if(numBottom >= topTouchBall + 150){
        move = 'down';
    }

    if(move == 'up'){
        numBottom += 12;
        ballContainer.style.bottom = numBottom + 'px';
        ball.style.height = general + 'px';
    }else{
        numBottom += -12;
        ballContainer.style.bottom = numBottom + 'px';
        ballContainer.style.zIndex = "1";
        ball.style.height = general + 'px';
    }
}


function shootBall(){
    if(move == 'down' && numBottom <= 850 && (((parseInt(basket.style.left) + 293) >= centersmall) && ((parseInt(basket.style.left) + 293) <= centerright))){
        audio.play();
        points = 1;
    }
    else{
        points = 0;
    }
    
    if(move == 'down' && numBottom <= 630){
        resetBall();
        score += points;
        scoreHtml.innerText = `Score:${score}`;
        return;
    }

    degree += 2.5;
    ball.style.transform = `rotate(${degree}deg)`


    BallDirectionAndSize();
    requestAnimationFrame(shootBall);
}

resetBall()

ballContainer.addEventListener('click' , () => window.requestAnimationFrame(shootBall))