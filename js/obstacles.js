function Obstacle(ctx, canvas){
    this.x = this.randomPositionX(),
    this.y = this.randomPositionY(),
    this.height = 40,
    this.width = 40,
    this.vy = 4,
    this.radius = 15,
    this.image = new Image(),
    this.color = "red",
    this.ctx = ctx,
    this.canvas = canvas;
}

Obstacle.prototype.draw = function (){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.image.src = "images/asteroid-icon.png";
    this.ctx.drawImage(this.image, (this.x-10), (this.y-20), this.width, this.height);
}

Obstacle.prototype.randomPositionX = function (){
    return Math.random()*(canvas.width)
}

Obstacle.prototype.randomPositionY = function (){
    return Math.floor(Math.random() * ((-10) - (-640))) - 640;
    
}

Obstacle.prototype.move = function (){
    this.y += this.vy
}
