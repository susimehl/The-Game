class Player {
    constructor (){
        this.width = 300
        this.heigth = 240
        this.x = 0
        this.y = 500 
        this.gravity = 0.2
        this.velocity = 0
        this.score = 0
    }

    draw(){
        this.velocity += this.gravity
        this.y += this.velocity

        if(this.y >= 600 - this.heigth){
            this.y = 600 - this.heigth
        }
        image(game.playerImage, this.x, this.y, this.width, this.heigth)
        
    }
    jump(){this.velocity = -10
    }
}