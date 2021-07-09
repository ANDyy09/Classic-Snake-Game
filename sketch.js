let snake;
let food;
let rez = 10;
let w, h;
let endGame;

function preload(){
  endGame = loadImage("Assets/game over.jpg")
}

function setup() {
  createCanvas(450, 375);
  frameRate(15)
  snake = new Snake();
  w = floor(width/rez);
  h = floor(height/rez);
  createFood();
}

function createFood(){
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function draw() {
  scale(rez)
  background("black");
  snake.show();
  snake.move();
  
  if(snake.eat(food) ){
    createFood();
    snake.addBody();
  }
  
  if(snake.endGame() ){    
    console.log("Game is Over");
    background(endGame, 200, 100, 200, 100);
    
    noLoop();
  }
  noStroke();
  
  fill("red")
  rect(food.x, food.y, 1, 1)
}

function keyPressed(){
  
  if(keyCode == LEFT_ARROW)
    snake.changeDir(-1, 0)

  else if(keyCode == UP_ARROW)
   snake.changeDir(0, -1)

  else if(keyCode == RIGHT_ARROW)
    snake.changeDir(1, 0)
  
  else if(keyCode == DOWN_ARROW)
    snake.changeDir(0, 1)
  
  else if(keyCode == "80")
    snake.changeDir(0, 0)

}