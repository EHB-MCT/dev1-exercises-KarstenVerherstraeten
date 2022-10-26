"use strict";

import context from "./context.js";


 export function drawLine(x1, y1, x2, y2){

    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();

}

export function drawRect(x, y, width,height,color){

    context.beginPath();
    context.fillStyle = color;
    context.fillRect(x,y,width,height);
    console.log(color);
    context.closePath();

}

export function drawCircle(x1, y1, radius){

    context.beginPath();
    context.ellipse(x1,y1,radius,radius,0,0, 180);
    context.fill();
}


export function rgb(R ,G ,B){
    let rgb = "rgb(" + R + "," + G + "," + B + ")";
    return rgb;


}export function rgba(R ,G ,B, A){
    let rgba = "rgb(" + R + "," + G + "," + B + "," + A + ")";
    return rgba;
}





