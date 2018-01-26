
function Player(ctx, canvas, image) {
    this.height = 160,
    this.width = 65,
    this.x = 150,
    this.y = 420,
    this.vy = 0,
    this.vx = 0,
    this.speed = 10,
    this.radius = 15,
    this.life = 30,
    this.color = 'red',
    this.orders = {
        left: false,
        right: false
    };
    this.friction = 0.9,
    this.image = new Image();
    this.ctx = ctx,
    this.canvas = canvas;
}

Player.prototype.render = function () {
    this.image.src = "images/nave.png";
    ctx.drawImage(this.image, this.x-30, this.y-10, this.width, this.height);
    // this.ctx.beginPath();
    // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    // this.ctx.closePath();
    // this.ctx.fillStyle = this.color;
    // this.ctx.fill();
}

Player.prototype.update = function () {
    this.vx *= this.friction;
    this.x += this.vx;

    if (this.x >= this.canvas.width - this.width) {
        this.x = this.canvas.width - this.width;
    } else if (this.x <= 15) {
        this.x = this.radius;
    }

    this.move_orders();
}

Player.prototype.moveLeft = function () {
    if (this.vx > -this.speed) {
        this.vx--;
    }
}

Player.prototype.moveRight = function () {
    if (this.vx < this.speed) {
        this.vx++;
    }
}

Player.prototype.move_orders = function () {
    if (this.orders.left == true) {
        this.moveLeft()
    }
    if (this.orders.right == true) {
        this.moveRight()
    }
}

Player.prototype.hitObstacle = function(obs) {
    if (Math.abs(obs.x - this.x) < this.radius + obs.radius - 5) {
      if (Math.abs(obs.y - this.y) < this.radius + obs.radius - 5) {
        this.life = this.life - 1;
        return true;
      }
    }
    };
Player.prototype.theEnd = function (ctx, canvas){
    if (this.life = 0){
    }
  }

Player.prototype.drawLife = function(ctx, canvas) {
    this.ctx.font = "16px Comic Sans MS";
    this.ctx.textAlign = "center";
    if (this.life > 21) {
        this.ctx.beginPath();
        this.ctx.arc(10, 20, 10, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(35, 20, 10, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(55, 20, 10, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    } else if (this.life > 11) {
        this.ctx.beginPath();
        this.ctx.arc(10, 20, 10, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(33, 25, 10, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }else if (this.life > 0) {
        this.ctx.beginPath();
        this.ctx.arc(10, 20, 10, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }else{
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 1000, 1000, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fillStyle = "GAME OVER";
        this.ctx.fill();
        
    }
  };


