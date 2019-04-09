//////// EJECUCION DE BOTONES///////// 
let buttonStart = document.getElementById('buttonStart')
let subMain = document.getElementById('sub-main')

buttonStart.addEventListener('click', ()=>{
    subMain.style.visibility = 'hidden'
    border = "none"
    start(); 
    
})
