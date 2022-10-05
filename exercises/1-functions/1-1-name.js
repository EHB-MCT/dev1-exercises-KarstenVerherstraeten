"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawK();
drawA();
drawR();
drawS();

function drawK(){

    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50,150);
    context.stroke();

    context.beginPath();
    context.moveTo(50,100);
    context.lineTo(100,50);
    context.stroke();

    context.beginPath();
    context.moveTo(50,100);
    context.lineTo(100,150);
    context.stroke();

     
}

function drawA(){
    context.strokeStyle = "blue"; 
    context.lineWidth = 5;  
    context.beginPath();
    context.moveTo(225,50);
    context.lineTo(200,150);
    context.stroke();

    context.beginPath();
    context.moveTo(225,50);
    context.lineTo(250,150);
    context.stroke();

    context.beginPath();
    context.moveTo(200,115);
    context.lineTo(250,115);
    context.stroke();
}


function drawR(){

    context.strokeStyle = "purple";
    context.lineWidth = 5;

    context.beginPath();
    context.moveTo(300,50);
    context.lineTo(300, 150);
    context.stroke();

    context.beginPath();
    context.moveTo(300,50);
    context.lineTo(350, 50);
    context.stroke();

    context.beginPath();
    context.moveTo(350, 50);
    context.lineTo(350,100);
    context.stroke();

    context.beginPath();
    context.moveTo(300, 100);
    context.lineTo(350,100);
    context.stroke();

    context.beginPath();
    context.moveTo(300,100);
    context.lineTo(350,150);
    context.stroke();

    
}

function drawS(){

    context.strokeStyle = "Yellow";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(400, 50);
    context.lineTo(450, 50);
    context.stroke();

    context.beginPath();
    context.moveTo(450, 50);
    context.lineTo(450, 75);
    context.stroke();

    context.beginPath();
    context.moveTo(450, 75);
    context.lineTo(400, 75);
    context.stroke();


    context.beginPath();
    context.moveTo(400, 75);
    context.lineTo(400, 100);
    context.stroke();

    context.beginPath();
    context.moveTo(400, 100);
    context.lineTo(450, 100);
    context.stroke();

}