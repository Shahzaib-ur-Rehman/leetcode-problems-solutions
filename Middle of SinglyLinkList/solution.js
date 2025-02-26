class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  detectACycle(head) {
    let slow = head;
    let fast = head.next;

    while (fast !== slow) {
      if (fast == null && fast.next === null) {
        return false;
      }
      slow=slow.next;
      fast=fast.next.next;
    }
    return true
  }
}
