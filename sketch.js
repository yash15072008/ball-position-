var ball;

function setup() {

    createCanvas(600,600);

    ball = createSprite(300,300,50,50);

}

function draw() {

    background("lightblue");

    if(keyDown("left_arrow")){

        ball.x = ball.x -3;
    }
    if(keyDown("right_arrow")){

        ball.x = ball.x +3;
    }
    if(keyDown("down_arrow")){

        ball.y = ball.y +3;
    }
    if(keyDown("up_arrow")){

        ball.y = ball.y -3;
    }

    drawSprites();
}