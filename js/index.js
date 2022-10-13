const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const background = new Image();
background.src = "./images/road.png";
const car = new Image();
car.src = "./images/car.png";

//Obstacles

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    let blueCar = new Car;
    blueCar.draw();
    //obstacles
    let obstacleOne = new Obstacle("pink");
    obstacleOne.draw();

    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 37){
       blueCar.moveLeft()
    } else if (e.keyCode === 39){
       blueCar.moveRigth()
    }
  })
  
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(background,0,0, canvas.width, canvas.height);
      blueCar.draw();
      obstacleOne.draw()
      obstacleOne.moves()
    
      requestAnimationFrame(update)
    }
      requestAnimationFrame(update)
  };
  }
  


class Car {
  constructor(){
    this.x = (canvas.width/2),
    this.y = canvas.height - 100,
    this.w = 50,
    this.h = 80
    //this.speed = 15
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
}


class Obstacle {
  constructor (color) {
    this.x = Math.floor(Math.random() * canvas.width),
    this.y = 10,
    this.w = Math.floor(Math.random() * 300 + 30)
    this.h = 15,
    this.color = color}  
  
    draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }
    moves() {
    this.y += 3
    }
}



// function updateObstacles() {
//   setInterval(createObstacle, 1000)
//   new Obstacle("pink")
// }


//obstacle collisions & points

// const gameEnd = () => {
//   if (obstacleOne.contains(blueCar)){}
//     //gameStop
// }

//you'll gain points for the time you spend on the game: for each half second, counter++ 
// || when craches, score stops running





