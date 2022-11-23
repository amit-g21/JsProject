let ballContainer = document.querySelector('#gameBallContainer');
let basket = document.querySelector('#basketContainer');
let num = window.innerWidth / 2.7;
let width = window.innerWidth - 600;
let direction = 'right';
let move = 'up'
let touch = 0
let numBottom = 90
let animationId;

ballContainer.addEventListener('click' , shoot)




function shoot(){
    requestAnimationFrame(shoot)
    if(move == 'down' && numBottom <= 620){
        cancelAnimationFrame(animationId);
        return;
    }
    if(numBottom >= 1000){
        move ='down';
    }
    if(numBottom <= 620){
        move = 'up'
    }
    if(move === 'up'){
    numBottom += 5;
    }else{
    numBottom -= 5;
    
    
}
ballContainer.style.bottom = numBottom + 'px';
}


window.addEventListener('click' , moveBasket);

setInterval(moveBasket , 10)

function moveBasket(){
    if(num >= width){
        direction = 'left';
    }
    if(num <= touch){
        direction = 'right'
    }
    if(direction === 'right'){
        num+= 5;
    }else{
        num-= 5;
    }
    basket.style.left = num + 'px';
    
};


