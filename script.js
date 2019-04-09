const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const frames = 0
let interval 

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    babyBoy.draw()
}

function start(){
    if(interval > 0) return;
    interval = setInterval(()=>{
        update();
    }, 1000/30);
}

