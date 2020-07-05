import Grid from "./grid";

let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

var row = 25;
var col = 25;
var side = 5;
let grid = new Grid(row, col, side);

grid.draw(context);
var start_row = 0;
var start_col = 0;
var end_row = row;
var end_col = col;
function loop() {
  if (start_row !== end_row - 1 || start_col !== end_col - 1) {
    context.clearRect(0, 0, 800, 600);
    var p = grid.dfs(start_row, start_col);
    start_row = p[0];
    start_col = p[1];
    //console.log(start_row, end_row - 1, start_col, end_col - 1);
    grid.draw(context);
    requestAnimationFrame(loop);
  }
}
requestAnimationFrame(loop);
