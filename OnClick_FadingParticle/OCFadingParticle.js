let ctx = document.getElementById('ctx').getContext('2d');  
let i = 0;


let drawBox = (x, y, height, width, r, g, b, t) => {
    ctx.fillStyle = `rgba(${r},${g},${b},${t})`
    ctx.fillRect(x, y, height, width)
}

let drawBoxes = () => {
    ctx.clearRect(0, 0, 500, 500)
    drawBox(100+i, 100+i, 5, 5, 100, 125, 255, 1)
    i += 10;
}

let counter = 0;

let animatePixel = () => {
    let interval = setInterval(function(){
        counter++
        if(counter === 5){
            clearInterval(interval);
        }
        drawBoxes()
    }, 1000/45);
}


document.onclick = () => {
    animatePixel()
}

