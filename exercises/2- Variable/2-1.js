"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let margin = 50;

/* let spacing = 50; als Y coordinaat dus bv (margin, pacing) of voor meer (margin, spacing * 2) */

drawLine(50,50)


function drawLine() {
    context.beginPath();
    context.moveTo(margin, 50);
    context.lineTo(width - margin, 50);
    context.lineTo(margin, 100);
    context.lineTo(width - margin, 100);
    context.lineTo(margin, 150)
    context.lineTo(width - margin,150);
    context.lineTo(margin, 200);
    context.lineTo(width - margin, 200);
    context.lineTo(margin, 250);
    context.lineTo(width - margin, 250);
    context.lineTo(margin, 50);
    context.stroke();

}