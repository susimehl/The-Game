class Obstacle {
    constructor(image){
        this.image = image
        this.x = width
        this.y = (Math.random() * height) / 2.5
        this.width = 50
        this.heigth = 50
        this.velocity = 1
    }

    draw(){
        this.x -=this.velocity
        image(this.image, this.x, this.y,100,100)
    }
    collision(playerInfo){
        let obstacleX = this.x + this.width / 2
        let obstacleY = this.y + this.height / 2

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.height / 2

        if(dist(obstacleX, obstacleY, playerX, playerY) < 25){
            return false
        }
        else{
            playerInfo.score += 100

            document.querySelector("#score span").innerText = playerInfo.score
            return true
        }
    }
}