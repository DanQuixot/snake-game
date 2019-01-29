let canvas = document.getElementById('canvas');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

let c = canvas.getContext('2d');

// Snake's original dimensions
  let x = canvas.width / 2;  //Start Position X
  let y = canvas.height / 2;  //Start Position Y
  let width = 20; // Start width
  let height = 20; // Start height
  let speed = 5; // Start Speed
  let dx = 0; // Start Direction X
  let dy = 0; // Start Direction Y

// Apple's original dimensions
  let ax = 50; // Apples's Start Position X
  let ay = 50; // Apples's Start Position Y
  let appleRadius = 10; // Apple's Radius

// Set background function
let background = function() {
  c.fillStyle = 'rgb(128,128,128, 0.5)';
  c.fillRect(0, 4, canvas.width, canvas.height);
  c.stroke();
}

// Update Snake's direction - edge of a screen
let update = function() {
  if (x > canvas.width) {
    x = 0;
  } 
  if (y > canvas.height) {
    y = 0;
  }
  if ( x < 0 ) {
    x = canvas.width;
  }
  if ( y < 0 ) {
    y = canvas.height;
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

// Draw an Apple
let drawApple = function() {
  c.beginPath();
  c.fillStyle = 'gold';
  c.arc(ax, ay, appleRadius, 0, Math.PI * 2, true);
  c.fill();
  console.log(canvas.width, canvas.height)
  console.log(ax, ay);
}

// Collision Detection System and new apple coordinates
let collisionDetection = function() {
  let res;
  xDistance = x + 10 - ax;
  yDistance = y + 10 - ay;
  res = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (res < 17) {
    ax = Math.random() * (canvas.width - appleRadius * 2) + appleRadius;
    ay = Math.random() * (canvas.height - appleRadius * 2) + appleRadius;
  }
}

// Key directions listener
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
  
});

// Start animation
function animate() {
  // setInterval(animate, 1000);
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  background();
  drawApple();
  update();
  drawHead();
  collisionDetection();
} 
animate();
// setInterval(animate, 1000)
