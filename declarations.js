/////////////VARIABLES Y CONSTANTES////////////

let randomFoodP1 = foodListP1[Math.floor(Math.random()*foodListP1.length)]


let randomFoodP2 = foodListP2[Math.floor(Math.random()*foodListP2.length)]
const babyGirl = new BabyGirl(images.babyGirl, 600, 110, 0)
const babyBoy= new BabyBoy(images.babyBoy, 100, 110, 0)
const check = new Check (5, 105, images.check)
const check2 = new Check2(5, 105, images.check)
const wrong = new Wrong (5, 105, images.wrong)
const wrong2 = new Wrong2(5, 105, images.wrong)
const board = new Board(images.board)
const successBoy = new SuccessBoy (77, 125, images.happyBoy)
const failsBoy = new FailBoy (118, 130, images.boySad)
let foodP1 = new FoodP1(randomFoodP1)
const successGirl = new SuccessGirl(600, 110, images.happyGirl)
const failsGirl = new FailGirl(600,110, images.girlSad)
let foodP2 = new FoodP2(randomFoodP2)
const scoreP1 = new ScoreP1(200, 200)
const scoreP2 = new ScoreP2(600,200)
const timer = new Timer(0, 0)
const gameover = new GameOver(images.gameover)