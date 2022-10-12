"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');



drawBoxes(50,50, 600);
drawBoxes(100, 100, 500);
drawBoxes(150,150, 400);
drawBoxes(200,200, 300);
drawBoxes(250,250,200);
drawBoxes(300,300, 100);


function drawBoxes(x,y, size){

    let R = Math.floor(Math.random() * 255 + 1);
    let G = Math.floor(Math.random() * 255 + 1);
    let B = Math.floor(Math.random() * 255 + 1);
    let color = "rgb(" + R + "," + G + "," + B + ")";


    context.fillStyle = color;
    context.beginPath();
    context.rect(x,y,size,size);
    context.fill();

}

