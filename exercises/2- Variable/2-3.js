"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;

darkBlue();
// deze guy werkt met 1/3 van sites etc dus fix die shit)

function darkBlue() {

    
    context.beginPath();
    context.rect(0, 0, width /3, height * 2/3);
    context.rect(width * 2/3,0, width /3, height * 2/3);
    context.fillStyle = "#2c3d50";
    context.fill();

    context.beginPath();
    context.rect(width * 1/3, 0, width * 1/3 , height);
    context.fillStyle = "#ecf0f1";
    context.fill();
    
    context.beginPath();
    context.rect(0, height * 1/6, width, height/3);
    context.fillStyle = "#e74b3c";
    context.fill();

    

    context.beginPath();
    context.rect(0, height * 2/3  ,width /3, height * 2/3 );
    context.rect(width * 2/3, height * 2/3, width /3, height * 1/3);
    context.fillStyle = "#3498db";
    context.fill();
}

