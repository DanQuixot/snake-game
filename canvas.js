let canvas = document.querySelector('canvas');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// Snake's original dimensions
  let x = 100;  //Start Position X
  let y = 100;  //Start Position Y
  let width = 20; // Start width
  let height = 20; // Start height
  let speed = 5; // Start Speed
  let dx = 0; // Start Direction X
  let dy = 0; // Start Direction Y

// Set background function
let background = function() {
  c.fillStyle = "gray";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.stroke();
}

// Update Snake's direction
let update = function() {
  if (x > innerWidth) {
    x = 0;
  } 
  if (y > innerHeight) {
    y = 0;
  }
  if (x < 0) {
    x = innerWidth;
  }
  if (y < 0) {
    y = innerHeight;
  }
  x += dx;
  y += dy;  
}

// Draw Snake's head
let drawHead = function() {
  c.beginPath();
  c.fillStyle = 'black';
  c.fillRect (x, y, width, height);
  c.stroke();
}

// Arrows listener
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 37 || e.keyCode === 65) {
    dy = 0;
    dx = - speed;
  }
  if(e.keyCode === 38 || e.keyCode === 87) {
    dx = 0;
    dy = - speed;
  }
  if (e.keyCode === 39 || e.keyCode === 68) {
    dy = 0;
    dx = speed;
  }
  if (e.keyCode === 40 || e.keyCode === 83) {
    dx = 0;
    dy = speed;
  }  
  console.log(e.keyCode);
});

// Start animation
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  background();
  update();
  drawHead();
  
} 
animate();