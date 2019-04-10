/////////////VARIABLES Y CONSTANTES////////////

let randomFood = foodList[Math.floor(Math.random()*foodList.length)]
const babyGirl = new BabyGirl(images.babyGirl, 600, 110, 0)
const babyBoy= new BabyBoy(images.babyBoy, 100, 110, 0)
const check = new Check (5, 105, images.check)
const check2 = new Check2(5, 105, images.check)
const wrong = new Wrong (5, 105, images.wrong)
const wrong2 = new Wrong2(5, 105, images.wrong)
const board = new Board(images.board)
//crea estos 3 para el player2
const successBoy = new SuccessBoy (77, 125, images.happyBoy)
const failsBoy = new FailBoy (118, 130, images.boySad)
let foodP1 = new FoodP1(randomFood)

