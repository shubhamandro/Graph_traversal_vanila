import Grid from "./grid";
var List = require("collections/list");

let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

var row = 30;
var col = 60;
var side = 5;
let grid = new Grid(row, col, side);
var q = new List();
grid.draw(context);

var start_pos = {
  x: -1,
  y: -1
};
var end_pos = {
  x: -1,
  y: -1
};

document.getElementById("button").addEventListener("mousedown", function(e) {
  start_traversal();
});

function start_traversal() {
  var tra = document.getElementById("traversal").value;
  start_pos.x = document.getElementById("start_x").value - 1;
  start_pos.y = document.getElementById("start_y").value - 1;
  end_pos.x = document.getElementById("end_x").value - 1;
  end_pos.y = document.getElementById("end_y").value - 1;
  grid.clear_grid();
  if (tra == "dfs") {
    dfs();
  }
  if (tra == "bfs") {
    q.push(start_pos.x);
    q.push(start_pos.y);
    bfs();
  }
}
function dfs() {
  if (start_pos.x !== end_pos.x || start_pos.y !== end_pos.y) {
    context.clearRect(0, 0, 800, 600);
    var p = grid.dfs(start_pos.x, start_pos.y);
    start_pos.x = p[0];
    start_pos.y = p[1];
    grid.draw(context);
    requestAnimationFrame(dfs);
  }
}

function bfs() {
  if (q.length === 0) {
    return;
  } else {
    var xx = q.shift();
    var yy = q.shift();
    grid.set_true(xx, yy);
    context.clearRect(0, 0, 800, 600);
    grid.draw(context);
    if (xx === end_pos.x && yy === end_pos.y) {
      return;
    } else {
      if (xx + 1 < row && grid.get_true(xx + 1, yy) === false) {
        q.push(xx + 1);
        q.push(yy);
      }
      if (yy + 1 < col && grid.get_true(xx, yy + 1) === false) {
        q.push(xx);
        q.push(yy + 1);
      }
      if (xx - 1 >= 0 && grid.get_true(xx - 1, yy) === false) {
        q.push(xx - 1);
        q.push(yy);
      }
      if (yy - 1 >= 0 && grid.get_true(xx, yy - 1) === false) {
        q.push(xx);
        q.push(yy - 1);
      }
      requestAnimationFrame(bfs);
    }
  }
}
