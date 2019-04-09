const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const frames = 0
let interval 


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    board.draw()
    babyGirl.draw()
    babyBoy.draw()
    check.draw()
    wrong.draw()
    wrong2.draw()
    check2.draw()
}

function start(){
    if(interval) return;
    interval = setInterval(()=>{
        update();
    }, 1000/25);
}
