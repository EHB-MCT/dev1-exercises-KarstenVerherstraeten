"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


drawBox();
drawLines();




function drawBox() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(0, 0, 600, 300);
   
}

function drawLines() {

    let height = 300;
    let width = 600;
    let horizontallines = 60;
    let verticallines = 30;
    

    for(let i = 0; i <= horizontallines; i++ ){
        Utils.drawLine(0 +(10 * i), 0, width - (10 * i) , height) 
    }

    for(let i = 0; i <= verticallines; i++){
        Utils.drawLine(0 , 0 + (10 * i) , width , height - (10 * i))
    }


}

