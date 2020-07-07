import Node from "./Node";

export default class queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(element) {
    var node = new Node(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }
  pop() {
    let ans = this.head.val;
    this.head = this.head.next;
    this.size--;
    return ans;
  }
}
