class Snake{
  
  constructor(){
    this.body = [ ];
    this.body[0] = createVector(0,0);
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
    }
  
  addBody(){
    this.len++;
    let head = this.body[0].copy();
    this.body.push(head);
  }
  
  show(){
    fill("blue");
   for(let i = 0; i < this.body.length; i++){
     rect(this.body[i].x, this.body[i].y, 1, 1)
   }
    
  }
  
  eat(food){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(food.x == x && food.y == y){
      return true;
    }
    else{
      return false;
    }
  }
  
  changeDir(x, y){
    this.xdir = x;
    this.ydir = y;
    }
  
  move(){
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
  
  endGame(){
    let head = this.body[this.body.length-1].copy();
    if(head.x<0 || head.x>45 || head.y<0 || head.y>37.5){
      return true;      
    }
  }
}