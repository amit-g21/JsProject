let ballContainer = document.querySelector('#gameBallContainer');
let basket = document.querySelector('#basketContainer');
let num = window.innerWidth / 2.7;
let width = window.innerWidth - 600;
let middle = basket.style.left;
let topTouchBall = window.innerHeight
let direction = 'right';
let move = 'up'
let touchLeft = 0
let numBottom = 90
let animationId;
let ball = document.querySelector('#basketball');
let general = window.innerWidth / 7;
ball.style.height = general;

let centersmall = window.innerWidth / 2 - 100;
let centerright = window.innerWidth / 2 + 100;

console.log(centersmall)


let score = 0;


((parseInt(basket.style.left) + 293) >= centersmall )


ballContainer.addEventListener('click' , shoot)

function shoot(){
    requestAnimationFrame(shoot)
    if(move == 'down' && numBottom <= 700){
        cancelAnimationFrame(animationId);
        return;
    }

    if(move == 'down' && numBottom <= 850 && ((parseInt(basket.style.left) + 293) >= centersmall) && ((parseInt(basket.style.left) + 293) <= centerright))
    {
        console.log('homo')
        return;
    }


    if(numBottom >= topTouchBall + 150){
        move ='down';
        ballContainer.style.zIndex = "1"
        // if(parseInt(ballContainer.style.bottom) >= 1300 ){
        //    alert('homo')
        // }
    }
    // if(numBottom <= 620){
    //     move = 'up'
    // }
    if(move === 'up'){
    numBottom += 12;
    ballContainer.style.height = -1
    }else{
    numBottom -= 12;
    
    }
    ballContainer.style.bottom = numBottom + 'px';
    general -= 1.3;
    ball.style.height = general + 'px';
}


window.addEventListener('click' , moveBasket);

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


