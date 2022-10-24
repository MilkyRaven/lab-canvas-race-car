const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const background = new Image();
background.src = "./images/road.png";
const car = new Image();
car.src = "./images/car.png";
let gameOn = true;

//score
let score = 0;

//Obstacles

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    setInterval (() => {
      if (gameOn === true)
        score += 10;
      console.log(score)
      }, 1000)
    update()
  }

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 37){
     blueCar.moveLeft()
  } else if (e.keyCode === 39){
     blueCar.moveRigth()
    }
  })
  
  setInterval (() => {
    const obstacle1 = new Obstacle
    arrayObstacles.push(obstacle1)
  }, 2000)
  }

    const update = () => {
      if (gameOn){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(background,0,0, canvas.width, canvas.height);
      blueCar.draw();
      ctx.fillText(`Your Score: ${score}`, 10, 50);
      for (let i = 0; i < arrayObstacles.length; i++) {
        arrayObstacles[i].drawObstacles() 
        if (blueCar.contains(arrayObstacles[i])){
          gameOn = false;
          console.log(gameOn)

          ctx.fillText(`You've lost!`, 80, 80);


      }
    }
      }
      requestAnimationFrame(update)
    }
    

class Car {
  constructor(){
    this.x = (canvas.width/2),
    this.y = canvas.height - 100,
    this.w = 50,
    this.h = 80
  }
  draw() {
    ctx.drawImage(car, this.x, this.y, this.w, this.h);
  }
  //moving the car
  moveLeft(){
    console.log("moveLeft")
    if (this.x < 100) {
    return;
    }
    this.x -= 30;
    
  }
  
  moveRigth(){
    console.log("mover")
    if (this.x > canvas.width - 150) {
     return;
    }
    this.x += this.w;
    console.log("esto es x", this.x)
  }
  contains(b){
        return (this.x < b.x + b.w) &&
        (this.x + this.w > b.x) &&
        (this.y < b.y + b.h) &&
        (this.y + this.h > b.y)
    
  }
}

let blueCar = new Car()


class Obstacle {
  constructor () {
    this.x = Math.floor(Math.random() * 250),
    this.y = 0,
    this.w = Math.floor(Math.random() * 200 ) + 20,
    this.h = 15,
    this.color = "rgb(250, 0, 0)" ,
    this.speed = 5
  }
  
    drawObstacles() {
      this.y += this.speed
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h)
  }
}

const arrayObstacles = [];
