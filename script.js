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
   foodP1.draw()
   if(p1Success){
       babyBoy.x = 80000;
       successBoy.draw()
       setTimeout(function(){ p1Success = false, babyBoy.x = 100 }, 200);
   }else if (p1Fail){
       babyBoy.x = 80000;
       failsBoy.draw()
       setTimeout(function(){ p1Fail = false, babyBoy.x = 100 }, 200);
   }
   //vuelve a pegar el if/else aqui linea 25 y cambia a PEDOS
}

function start(){
   if(interval) return;
   interval = setInterval(()=>{
       update();
   }, 1000/25);
}