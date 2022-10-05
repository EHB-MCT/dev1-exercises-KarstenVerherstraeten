"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

boxTopLeft();
boxBottomRight();
boxCenter();
smalerBoxLeft();
smalerBoxRight();
smallestBoxLeft();
smallestBoxRight();

function boxTopLeft(){

    context.strokeStyle = 'orange'; 
    context.beginPath();
    context.rect(50,50,200,200)
    context.stroke();

}

function boxBottomRight(){

    context.beginPath();
    context.rect(300,300,200,200);
    context.stroke();

}

function boxCenter(){

    context.strokeStyle = 'black'; 
    context.beginPath();
    context.rect(175,175,200,200);
    context.stroke()
    context.fill();
}

function smalerBoxLeft(){

    context.strokeStyle = 'orange';
    context.beginPath();
    context.rect(75,375,100,100);
    context.stroke();

}

function smalerBoxRight(){

    context.strokeStyle = 'orange';
    context.beginPath();
    context.rect(375,75,100,100);
    context.stroke();

}

function smallestBoxLeft(){
    
    context.beginPath()
    context.rect(25, 475, 50,50)
    context.stroke();
    context.fill();
}

function smallestBoxRight(){
    
    context.beginPath()
    context.rect(475,25 , 50,50)
    context.stroke();
    context.fill();
}

