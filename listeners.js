//////// EJECUCION DE BOTONES/////////
let buttonStart = document.getElementById('buttonStart')
let subMain = document.getElementById('sub-main')
let p1Success = false;
let p1Fail = false;
//crea 2 booleanos para el P2

buttonStart.addEventListener('click', ()=>{
   subMain.style.visibility = 'hidden'
   border = "none"
   start();
})

document.addEventListener('keydown', (e)=>{
   if(e.keyCode === 68 || e.keyCode === 65){
       if(foodP1.status === e.keyCode){
           p1Success = true
           randomFood = foodList[Math.floor(Math.random()*foodList.length)]
           foodP1 = new FoodP1(randomFood)
           foodP1.draw()
       } else {
           p1Fail = true
           randomFood = foodList[Math.floor(Math.random()*foodList.length)]
           foodP1 = new FoodP1(randomFood)
           foodP1.draw()
       }
   }
})

//crear todo un eventlistener para P2