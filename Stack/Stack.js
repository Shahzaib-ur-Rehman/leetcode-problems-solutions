class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
  }
  pop() {
    if (!this.first) return null;
    let removedNode = this.first;
    if (this.first == this.last) {
      this.first = null;
      this.last = null;
      return removedNode;
    } else {
      this.first = removedNode.next;
    }
    this.size--;
    return removedNode;
  }
}
