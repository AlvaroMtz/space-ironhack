var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var player = new Player(ctx, canvas);
var obstacles = [];

function createObstacle(){
    if(obstacles.length < 6){
        obstacles.push(new Obstacle(ctx,canvas))
    }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.render();
  createObstacle();
  
  obstacles.forEach(function (e,i){
      e.move();
      e.draw();
      player.hitObstacle(e);
      if(e.y > 620) {
        obstacles.splice(i,1)
        
      }
  })
  player.drawLife();
  
};

function start () {
  setInterval(update, 30)
}

function stopGame(s, e) {
  var cancelSetInterval=
    setInterval(update,0) 

  if (s.life <= -1) {
    if (s.hitObstacle(e) == true) {
      s.life = 0;
      s.theEnd();
      cancelAnimationFrame(animate);
    }
  }
};


function setPlayerKey(keyCode, value) {
  switch (keyCode) {
    case 32:
      start()
    case 37:
      player.orders.left = value;
      break;
    case 39:
      player.orders.right = value;
      break;
  }
}

document.onkeydown = function (e) {
  setPlayerKey(e.keyCode, true)
}

document.onkeyup = function (e) {
  setPlayerKey(e.keyCode, false);
}


