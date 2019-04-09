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

class BabyGirl{
   constructor(img, x, y, sx){
        this.x = x
        this.y = y
        this.img = new Image()
        this.img.src = img //happy - sad
        
        this.sx = sx
        this.sy = 0

        this.counter = 0
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

        this.sx += 214 + this.counter % 7
        this.counter++
    }
}

class Board {
    constructor(img){
      this.x = 0
      this.y = 0
      this.height = 450
      this.width = 900
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
