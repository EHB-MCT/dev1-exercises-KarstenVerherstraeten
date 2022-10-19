"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    let space = 25
    while (i <= 6) {
        Utils.drawLine(50 + (i * space) ,200 + (i * space) , 200 + (i * space), 50 + (i * space));
        Utils.drawLine(50 + (i * space), 200 - (i * space) , 200 + (i * space), 350 - (i * space));
        i++;
    }
}