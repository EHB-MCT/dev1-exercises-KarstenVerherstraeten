"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

    let margin = 400
    let width = context.canvas.width;
    let height = context.canvas.height;

    background();
    drawBubbles();



function background(){
   let color = "orange"

    Utils.drawRect(0,0, width, height, color);
    console.log("test ")
}

function drawBubbles(){
    
    let borderRadius = (width - margin) * (height - margin)
    

    for( let i= 0; i <= 30; i++){
        let x = 200 + Math.random() * (width - margin);
        let y = 200+ Math.random() * (height - margin);
        let radius = Math.random() * 100;

        let R = Math.random() * 255;
        let G = Math.random() * 255;
        let B = Math.random() * 255;
        let A = Math.random();

        
        context.fillStyle = Utils.rgba(R, G,B, A)
        Utils.drawCircle(x,y,radius);
       
    }
   

    



}