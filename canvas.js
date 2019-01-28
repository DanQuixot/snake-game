let canvas = document.querySelector('canvas');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// Set background function
let background = function() {
  c.fillStyle = "gray";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.stroke();
}

// Direction and speed variables
// let up = 200;
// let down = 200;
// let right = 200;
// let left = 200;
// let dx = 2;
// let dy = 2;



// The Snake Function

function Snake(x, y, dx, dy, snakeWidth, snakeHeight) {
  // Current position
  this.x = x;
  this.y = y;

  // Current delta
  this.dx = dx;
  this.dy = dy;

  // Current Width and Height
  this.snakeWidth = snakeWidth;
  this.snakeHeight = snakeHeight;

  this.draw = function () {
    c.beginPath();
    c.fillStyle = "black";
    c.fillRect(this.x, this.y, this.snakeWidth, this.snakeHeight);
    c.stroke();
  }
  // // Change direction
  // // this.changeDirection = function(e) {
  // //   switch(e.keyCode) {
  // //     case 37 || 39: 
  // //       this.x = -this.x;
  // //       break;
  // //     case 38 || 40: 
  // //       this.y = -this.y;
  // //       break;
  // //   }
  // }
  this.update = function() {
    if (this.x > innerWidth) {
      this.x = 0;
    } 
    if (this.y > innerHeight) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = innerWidth;
    }
    if (this.y < 0) {
      this.y = innerHeight;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

let snake = new Snake(100, 100, 4, 0, 20, 20);

function animate() {
  requestAnimationFrame(animate);
  // window.addEventListener('keydown', )
  c.clearRect(0, 0, innerWidth, innerHeight);
  background();
  snake.update();
} 
animate();