class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prev;
      this.tail.next = null;
    }

    this.length--;
    // if (this.length===0) {
    //     this.head=null;
    //     this.tail=null;
    // }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
    }
    temp.next = null;
    this.length--;
    return temp;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  get(index) {
    if (index < 0) return null;
    let count = 0;
    let current = this.head;
    while (current) {
      if (count === index) return current;
      current = current.next;
      count++;
    }
    return null;
  }
  set(index, value) {
    if (index < 0) return false;
    let count = 0;
    let current = this.head;
    while (current) {
      if (count === index) {
        current.value = value;
        return true;
      }
      current = current.next;
      count++;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0) return false;
    let newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
      this.length++;
      return true;
    }

    let current = this.head;
    let prev = null;
    let count = 0;
    while (current && count < index) {
      prev = current;
      count++;
      current = current.next;
    }
    if (count !== index) return false;
    prev.next = newNode;
    newNode.next = current;
    if (!current) {
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0) return null;

    if (index == 0) {
      let temp = this.head;
      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        let temp = this.head;
        this.head = temp.next;
      }
      this.length--;
      return temp;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (current && count < index) {
      prev = current;
      count++;
      current = current.next;
    }

    if (count !== index) return null;

    prev.next = current.next;
    this.length--;
    return current;
  }

  reverse() {
    if (!this.head) return null; // Handle empty list

    this.tail = this.head; // The old head becomes the new tail
    let prev = null;
    let current = this.head;

    while (current) {
        let nextNode = current.next; // Store next node
        current.next = prev; // Reverse the pointer
        prev = current; // Move prev forward
        current = nextNode; // Move current forward
    }

    this.head = prev; // The last processed node becomes the new head

    return this; // Return the reversed list
  }

  print() {
    let list = [];
    let current = this.head;
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    console.log(list);
  }
}

const myList = new SinglyLinkedList();
myList.push(10);
myList.push(20);
myList.push(30);
myList.push(40);

console.log("Before Reverse:");
myList.print(); // 10 -> 20 -> 30 -> 40

myList.reverse();

console.log("After Reverse:");
myList.print(); // 40 -> 30 -> 20 -> 10