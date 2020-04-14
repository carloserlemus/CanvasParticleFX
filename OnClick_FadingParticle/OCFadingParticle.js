let ctx = document.getElementById('ctx').getContext('2d');

let drawBox = (x, y, height, width, r, g, b, t) => {
    ctx.fillStyle = `rgba(${r},${g},${b},${t})`
    ctx.fillRect(x, y, height, width)
}

document.onclick = () => {
    for (i = 0; i < 200; i += 10){
        drawBox(100+i, 100+i, 5, 5, 100, 125, 255, 1)
    }
}
