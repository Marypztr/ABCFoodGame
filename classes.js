const images = {
    babyBoy: "./assets/characters/spritesheetBoy.PNG",
    babyGirl:"/assets/characters/spritesheetGirl.png",
    girlSad:"/assets/characters/sadGirl.png",
    boySad:"/assets/characters/sadBoy.png",
    happyGirl:"/assets/characters/happyGirl.png",
    happyBoy:"/assets/characters/happyBoy.png"
}

/////CHARACTERS//////
class BabyBoy{
    constructor(){
        this.x = 100
        this.y = 110
        this.img = new Image()
        this.img.src = images.babyBoy //happy - sad
        this.sx = 0
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
