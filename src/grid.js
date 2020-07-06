import Box from "./box";
export default class grid {
  constructor(row, col, side) {
    this.row = row;
    this.col = col;
    this.side = side;
    this.grid = new Array(row);
    for (var i = 0; i < this.row; i++) {
      this.grid[i] = new Array(col);
    }
    for (i = 0; i < this.row; i++) {
      for (var j = 0; j < this.col; j++) {
        let box = new Box(i, j, this.side);
        this.grid[i][j] = box;
      }
    }
  }

  draw(context) {
    for (var i = 0; i < this.row; i++) {
      for (var j = 0; j < this.col; j++) {
        this.grid[i][j].draw(context);
      }
    }
  }
  clear_grid() {
    for (var i = 0; i < this.row; i++) {
      for (var j = 0; j < this.col; j++) {
        this.grid[i][j].vis = false;
      }
    }
  }

  set_true(i, j) {
    this.grid[i][j].vis = true;
  }
  get_true(i, j) {
    return this.grid[i][j].vis;
  }
  dfs(i, j) {
    this.grid[i][j].vis = true;
    var p = new Array(2);
    if (i + 1 < this.row && this.grid[i + 1][j].vis === false) {
      p[0] = i + 1;
      p[1] = j;
      this.grid[i + 1][j].vis = true;
    } else if (j + 1 < this.col && this.grid[i][j + 1].vis === false) {
      p[0] = i;
      p[1] = j + 1;
      this.grid[i][j + 1].vis = true;
    } else if (i - 1 >= 0 && this.grid[i - 1][j].vis === false) {
      p[0] = i - 1;
      p[1] = j;
      this.grid[i - 1][j].vis = true;
    } else if (j - 1 >= 0 && this.grid[i][j - 1].vis === false) {
      p[0] = i;
      p[1] = j - 1;
      this.grid[i][j - 1].vis = true;
    }
    return p;
  }
}
