const images = {
  babyBoy: "assets/characters/spritesheetBoy.PNG",
  babyGirl:"assets/characters/spritesheetGirl.png",
  girlSad:"assets/characters/sadGirl.png",
  boySad:"assets/characters/sadBoy.png",
  happyGirl:"assets/characters/happyGirl.png",
  happyBoy:"assets/characters/happyBoy.png",
  board:"assets/images/board1.jpg",
  check:"assets/images/checkButton.png",
  wrong:"assets/images/buttonError.png"
}



//68 se lo asignas a la comida Buena y 65 a la comida mala
const foodListP1 = [
  food1={
    img: './assets/images/food/apple.png',
    status: 68
    
  },
  food2={
    img: './assets/images/food/banana.png',
    status: 68
    
  },
  food3={
    img:'./assets/images/food/beer.png',
    status:65
    
  },
  food4={
    img:'./assets/images/food/biberon.png',
    status: 68
    
  },
  food5={
    img:'./assets/images/food/cake.png',
    status:65
    
  },
  food6={
    img:'./assets/images/food/carrot.png',
    status: 68
    
  },
  food7={
    img:'./assets/images/food/cookie.png',
    status:65
    
  },
  food8={
    img:'./assets/images/food/fries.png',
    status:65
    
  },
  food9={
    img:'./assets/images/food/pineappple.png',
    status: 68
    
  },
  food10={
    img:'./assets/images/food/pizza.png',
    status:65
    
  },
  food11={
    img:'./assets/images/food/burger.png',
    status:65
    
  },
  food12 ={
    img:'./assets/images/food/coke.png',
    status:65
    
  },
  food13 ={
  img:'./assets/images/food/donut.png',
  status:65
  },
  food14={
    img:'./assets/images/food/grapes.png',
    status: 68
    
  },
  food15={
    img:'./assets/images/food/iceCream.png',
    status:65
    
  },
  food16={
    img:'./assets/images/food/salad.png',
    status: 68
    
  },
  food17={
    img:'./assets/images/food/strawberry.png',
    status: 68
    
  },
  food18={
    img:'./assets/images/food/tacos.png',
    status:65
    
  }
  ]

const foodListP2 = [
  food1={
    img: './assets/images/food/apple.png',
    status:39
    //statusP2: keyCode ---- le pones el keycode de las flechas
  },
  food2={
    img: './assets/images/food/banana.png',

    status:39
  },
  food3={
    img:'./assets/images/food/beer.png',

    status:37
  },
  food4={
    img:'./assets/images/food/biberon.png',
    
    status:39
  },
  food5={
    img:'./assets/images/food/cake.png',
    
    status:37
  },
  food6={
    img:'./assets/images/food/carrot.png',
    
    status:39
  },
  food7={
    img:'./assets/images/food/cookie.png',
    
    status:37
  },
  food8={
    img:'./assets/images/food/fries.png',
    
    status:37
  },
  food9={
    img:'./assets/images/food/pineappple.png',
    
    status:39
  },
  food10={
    img:'./assets/images/food/pizza.png',
    
    status:37
  },
  food11={
    img:'./assets/images/food/burger.png',
    
    status:37
  },
  food12 ={
    img:'./assets/images/food/coke.png',
    
    status:37
  },
  food13 ={
  img:'./assets/images/food/donut.png',
  
  status:37
  },
  food14={
    img:'./assets/images/food/grapes.png',
    
    status:39
  },
  food15={
    img:'./assets/images/food/iceCream.png',
    
    status:37
  },
  food16={
    img:'./assets/images/food/salad.png',
    
    status:39
  },
  food17={
    img:'./assets/images/food/strawberry.png',
    
    status:39
  },
  food18={
    img:'./assets/images/food/tacos.png',
    
    status:37
  }
  ]
  

/////CHARACTERS//////
class BabyBoy{
  constructor(img, x, y, sx){
      this.x = x
      this.y = y
      this.img = new Image()
      this.img.src = img //happy - sad
      this.sx = sx
      this.sy = 0
  }
  draw(){
      if(this.sx > 4470) this.sx = 0
      ctx.drawImage(
          this.img,
          this.sx,
          this.sy,
          214,
          234,
          this.x,
          this.y,
          214,
          234
      )
      this.sx += 214
  }
}
class SuccessBoy{
constructor(x, y, img) {
  this.x = x
  this.y = y
  this.music = new Audio()
  this.music.src ="./assets/music/Success.mp3"
  this.img = new Image()
  this.img.src= images.happyBoy
  this.img.onload = () => {
    this.draw()
  }
}
draw(){
  ctx.drawImage(this.img, this.x, this.y, 243, 209)
}
}
class FailBoy{
constructor(x, y, img) {
  this.x = x
  this.y = y
  this.music = new Audio()
  this.music.src="./assets/music/error.mp3"
  this.img = new Image()
  this.img.src= images.boySad
  this.img.onload = () => {
    this.draw()
  }
}
draw(){
  ctx.drawImage(this.img, this.x, this.y, 171, 211)
}
}

class BabyGirl{
 constructor(img, x, y, sx){
      this.x = x
      this.y = y
      this.img = new Image()
      this.img.src = img //happy - sad
      this.sx = sx
      this.sy = 0
  }
  draw(){
      
      if(this.sx > 4470) this.sx = 0

      ctx.drawImage(
          this.img,
          this.sx,
          this.sy,
          207,
          233,
          this.x,
          this.y,
          207,
          233
      )
      this.sx += 217
  }
}

class SuccessGirl{
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.music = new Audio()
    this.music.src ="./assets/music/Success.mp3"
    this.img = new Image()
    this.img.src= images.happyGirl
    this.img.onload = () => {
      this.draw()
    }
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, 243, 224)
  }
  }
  class FailGirl{
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.music = new Audio()
    this.music.src="./assets/music/error.mp3"
    this.img = new Image()
    this.img.src= images.girlSad
    this.img.onload = () => {
      this.draw()
    }
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, 171, 226)
  }
  }


/////OTHER ELEMENTS//////
class Board {
constructor(img){
  this.x = 0
  this.y = 0
  this.height = 450
  this.width = 900
  this.music = new Audio()
  this.music.src = "./assets/music/background.mp3"
  this.img = new Image()
  this.img.src = img
  this.img.onload = () => {
    this.draw()
  }
  }
  draw(){
      ctx.drawImage(this.img, this.x, this.y, canvas.width, canvas.height)
  }
}

class Check {
constructor (x, y, img) {
  this.x = 300
  this.y = 360
  this.img = new Image()
  this.img.src= img
  this.img.onload = () => {
    this.draw()
  }
}
draw(){
  ctx.drawImage(this.img, this.x, this.y, 70, 70)
}
}

class Check2 {
  constructor (x, y, img) {
  this.x = 810
  this.y = 360
  this.img = new Image()
  this.img.src= img
  this.img.onload = () => {
    this.draw()
  }
  }
  draw(){
      ctx.drawImage(this.img, this.x, this.y, 70, 70)
  }
}


class Wrong {
  constructor (x, y, img) {
  this.x = 20
  this.y = 360
  this.img = new Image()
  this.img.src= img
  this.img.onload = () => {
    this.draw()
  }
  }
  draw(){
      ctx.drawImage(this.img, this.x, this.y, 70, 70)
  }
}


class Wrong2 {
  constructor (x, y, img) {
  this.x = 530
  this.y = 360
  this.img = new Image()
  this.img.src= img
  this.img.onload = () => {
    this.draw()
  }    
}
  draw(){
    ctx.drawImage(this.img, this.x, this.y, 70, 70)
  }
}

class FoodP1 {
	constructor (index){
		this.x = 160
		this.y = 360
		this.width = 70
		this.height = 70
		this.img = new Image()
		this.img.src = index.img
		this.status = index.status
		this.img.onload = () => {
			this.draw()
		} 
	}
	draw(){
		ctx.drawImage(this.img, this.x, this.y, 70, 70)
	}
	clear(){
		ctx.clearRect(this.img, this.x, this.y, 0)
	}
}

class FoodP2 { 
	constructor (index){
		this.x = 670
		this.y = 360
		this.width = 70
		this.height = 70
		this.img = new Image()
		this.img.src = index.img
		this.status = index.status
		this.img.onload = () => {
			this.draw()
		} 
	}
	draw(){
		ctx.drawImage(this.img, this.x, this.y, 70, 70)
	}
	clear(){
		ctx.clearRect(this.img, this.x, this.y, 0)
	}
}
class ScoreP1{
  constructor(x, y){
    this.x= x
    this.y= y
    this.text = ""
    this.score = 0;
    }
    draw(){
     this.text = "Score: " + this.score

      ctx.font="50px start"
      ctx.fillStyle = "Gray"
      ctx.fillText(this.text,120,90)

    }
  }

  class ScoreP2{
    constructor(x, y){
      this.x= x
      this.y= y
      this.text = ""
      this.score = 0;
      }
      draw(){
       this.text = "Score: " + this.score
        console.log("yolo")
        ctx.font="50px start"
        ctx.fillStyle = "Gray"
        ctx.fillText(this.text,630, 90)
  
      }
    }

  class Timer {
    constructor(x, y){
      this.x = x
      this.y = y
      this.time = 20

    }
    draw(){
      ctx.font = "120px start"
      ctx.fillStyle = "black"
      ctx.fillText(this.time,  400, 200)
    }
  }