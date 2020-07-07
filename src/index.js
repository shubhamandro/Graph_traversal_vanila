import Grid from "./grid";
var List = require("collections/list");

let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

var row = 30;
var col = 60;
var side = 5;
let grid = new Grid(row, col, side);
var q = new List();
var queue = new List();
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
    grid.set_start(start_pos.x, start_pos.y);
    q.clear();
    q.push(start_pos.x);
    q.push(start_pos.y);
    dfs();
  } else if (tra == "bfs") {
    grid.set_start(start_pos.x, start_pos.y);
    queue.clear();
    var ele = {
      x: start_pos.x,
      y: start_pos.y
    };
    queue.push(ele);
    bfs();
  }
}
function dfs() {
  if (q.length === 0) {
    return;
  } else {
    var yy = q.pop();
    var xx = q.pop();
    grid.set_true(xx, yy);
    context.clearRect(0, 0, 800, 600);
    grid.draw(context);
    if (xx === end_pos.x && yy === end_pos.y) {
      grid.set_end(xx, yy);
      grid.draw(context);
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
      requestAnimationFrame(dfs);
    }
  }
}
function bfs() {
  if (queue.length === 0) {
    return;
  } else {
    var ele = queue.shift();
    let xx = ele.x;
    let yy = ele.y;
    grid.set_true(xx, yy);
    context.clearRect(0, 0, 800, 600);
    grid.draw(context);
    if (xx === end_pos.x && yy === end_pos.y) {
      grid.set_end(xx, yy);
      grid.draw(context);
      return;
    } else {
      if (xx + 1 < row && grid.get_true(xx + 1, yy) === false) {
        let next = {
          x: xx + 1,
          y: yy
        };
        if (!queue.has(next)) {
          queue.push(next);
        }
      }
      if (yy + 1 < col && grid.get_true(xx, yy + 1) === false) {
        let next = {
          x: xx,
          y: yy + 1
        };
        if (!queue.has(next)) {
          queue.push(next);
        }
      }
      if (xx - 1 >= 0 && grid.get_true(xx - 1, yy) === false) {
        let next = {
          x: xx - 1,
          y: yy
        };
        if (!queue.has(next)) {
          queue.push(next);
        }
      }
      if (yy - 1 >= 0 && grid.get_true(xx, yy - 1) === false) {
        let next = {
          x: xx,
          y: yy - 1
        };
        if (!queue.has(next)) {
          queue.push(next);
        }
      }
    }
  }
  requestAnimationFrame(bfs);
}
