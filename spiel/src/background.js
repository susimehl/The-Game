class Background {
    draw(){

        game.backgroundImages.forEach(function(img){
            img.x -= img.speed
            image(img.src,img.x, 0,width,heigth)

            if(img.x <= -width) img.x = 0
        })
    }
}