let ctx = document.getElementById("ctx").getContext('2d');

let alpha = 1;
let bX1 = 250;
let bY1 = 250;

let bX2 = 250;
let bY2 = 250;

let bX3 = 250;
let bY3 = 250;

let bHeight = 5;
let bWidth = 5;

let drawBox1 = function() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.globalAlpha = alpha;
    ctx.fillRect(bX1, bY1, bHeight, bWidth);
    bX1 += 2;
    bY1 += 2;
    alpha -= 0.02;
}

let drawBox2 = function() {
    ctx.globalAlpha = alpha;
    ctx.fillRect(bX2, bY2, bHeight, bWidth);
    bX2 += 3*Math.random();
    bY2 += 2;
    alpha -= 0.02;
}

let drawBox3 = function() {
    ctx.globalAlpha = alpha;
    ctx.fillRect(bX3, bY3, bHeight, bWidth);
    bX3 += 2;
    bY3 += 1*Math.random();
    alpha -= 0.02;
}


let Boxes = function() {
    drawBox1()
    drawBox2()
    drawBox3()
}

setInterval(Boxes, 1000/45);