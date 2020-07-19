import QElement from "./QElement";
export default class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    var qElement = new QElement(element, priority);
    var contain = false;
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(qElement);
    }
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  rear() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  clear() {
    while (!this.isEmpty()) {
      this.dequeue();
    }
  }
  size() {
    return this.items.length;
  }
  find(ele) {
    for (var i = 0; i < this.items.length; i++) {
      if (
        this.items[i].element.x === ele.x &&
        this.items[i].element.y === ele.y
      ) {
        return true;
      }
    }
    return false;
  }
}
