class Game {
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.backgroundImages
        this.playerImage
        this.obstacles = []
        this.sunflowerImage
    }


preload(){
    this.backgroundImages = [
       /* {src: loadImage(".assets/background/sea03.gif"), x:0, speed:0}*/
    ]
    this.playerImage = loadImage("./assets/player/waechter-20.png")
    this.sunflowerImage = loadImage("./assets/sunflower/SunflowerFlowerHead.png")
}

draw(){
    clear()
    // this.background.draw()
    this.player.draw()
    
    if(frameCount % 300 === 0 ){
        this.obstacles.push(new Obstacle(this.sunflowerImage))
    }
    this.obstacles.forEach(function (obstacle){
        obstacle.draw()
    })
    this.obstacles = this.obstacles.filter(obstacle => {
        console.log(this)

        if(obstacle.collision(this.player)){
            return false
        }
        else{  
            return true
        }
    })
}
}