import Grid from "./grid";

let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

var row = 30;
var col = 60;
var side = 5;
let grid = new Grid(row, col, side);

grid.draw(context);

var start_pos = {
  x: -1,
  y: -1
};
var end_pos = {
  x: -1,
  y: -1
};

function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  return { x, y };
}
function start_traversal() {
  var tra = document.getElementById("traversal");
  console.log(start_pos.x, start_pos.y);
  if (start_pos.x === -1) {
    alert("select start");
    canvas.addEventListener("mousedown", function(e) {
      var k = getMousePosition(canvas, e);
      start_pos.x = k.x;
      start_pos.y = k.y;
    });
  }
  console.log(start_pos.x, start_pos.y);
  if (end_pos === -1) {
    canvas.addEventListener("mousedown", function(e) {
      var k = getMousePosition(canvas, e);
      end_pos.x = k.x;
      end_pos.y = k.y;
    });
  }
}

// console.log(start_row, start_col);
// function loop() {
//   if (start_row !== end_row - 1 || start_col !== end_col - 1) {
//     context.clearRect(0, 0, 800, 600);
//     var p = grid.dfs(start_row, start_col);
//     start_row = p[0];
//     start_col = p[1];
//     grid.draw(context);
//     requestAnimationFrame(loop);
//   }
// }
// requestAnimationFrame(loop);
