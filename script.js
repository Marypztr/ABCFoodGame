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
   foodP2.draw()
 

   if(p1Success){
       babyBoy.x = 80000;
       successBoy.draw()
       setTimeout(function(){ p1Success = false, babyBoy.x = 100 }, 200);
   }else if (p1Fail){
       babyBoy.x = 80000;
       failsBoy.draw()
       setTimeout(function(){ p1Fail = false, babyBoy.x = 100 }, 200);
   }
   if(p2Success){
    babyGirl.x = 80000;
    successGirl.draw()
    setTimeout(function(){ p2Success = false, babyGirl.x = 600 }, 200);
}else if (p2Fail){
    babyGirl.x = 80000;
    failsGirl.draw()
    setTimeout(function(){ p2Fail = false, babyGirl.x = 600 }, 200);
}

}

function start(){
   if(interval) return;
   interval = setInterval(()=>{
       update();
   }, 1000/25);
}