function MovingObject(attrs) {
  this.pos = attrs.pos;
  this.vel = attrs.vel;
  this.radius = attrs.radius;
  this.color = attrs.color;
}

MovingObject.prototype.move = function() {
  this.pos[0] = this.pos[0] + this.vel[0];
  this.pos[1] = this.pos[1] + this.vel[1];
};






















module.exports = MovingObject;
