export default class box {
  constructor(row, col, side) {
    this.side = side;
    this.vis = false;
    this.position = {
      x: col * this.side,
      y: row * this.side
    };
  }
  draw(context) {
    if (this.vis) {
      context.fillStyle = "black";
    } else {
      context.fillStyle = "grey";
    }
    context.strokeStyle = "white";
    context.fillRect(this.position.x, this.position.y, this.side, this.side);
    context.strokeRect(this.position.x, this.position.y, this.side, this.side);
    // console.log(this.position.x, this.position.y);
  }
}
