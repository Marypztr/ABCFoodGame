//////// EJECUCION DE BOTONES/////////
let buttonStart = document.getElementById('buttonStart')
let subMain = document.getElementById('sub-main')
let p1Success = false;
let p1Fail = false;
let p2Success =false;
let p2Fail = false;


buttonStart.addEventListener('click', ()=>{
   subMain.style.visibility = 'hidden'
   border = "none"
   start();
})

document.addEventListener('keydown', (e)=>{
   if(e.keyCode === 68 || e.keyCode === 65){
       console.log(foodP1.status, e.keyCode)
       if(foodP1.status === e.keyCode){
           p1Success = true
           scoreP1.score++
           randomFoodP1 = foodListP1[Math.floor(Math.random()*foodListP1.length)]
           foodP1 = new FoodP1(randomFoodP1)
           foodP1.draw()

       } else {
           p1Fail = true
           scoreP1.score--
           randomFoodP1 = foodListP1[Math.floor(Math.random()*foodListP1.length)]
           foodP1 = new FoodP1(randomFoodP1)
           foodP1.draw()
       }
   }
})

document.addEventListener('keydown', (e)=>{
    if(e.keyCode === 39 || e.keyCode === 37){
        if(foodP2.status === e.keyCode){
            p2Success = true
            scoreP2.score++
            randomFoodP2 = foodListP2[Math.floor(Math.random()*foodListP2.length)]
            foodP2 = new FoodP2(randomFoodP2)
            foodP2.draw()
        } else {
            p2Fail = true
            scoreP2.score--
            randomFoodP2 = foodListP2[Math.floor(Math.random()*foodListP2.length)]
            foodP2 = new FoodP2(randomFoodP2)
            foodP2.draw()
        }
    }
 })
