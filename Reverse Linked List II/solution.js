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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverse = (head) => {
  let prev = null;
  let current = head;
  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
};
var reverseBetween = function (head, left, right) {
  if (!head || head?.next === null) {
    return head;
  }
  let leftPrev = null;
  let leftNode = null;
  let rightNode = null;
  let rightNext = null;

  let i = 1;
  let current = head;

  while (current && i <= right) {
    if (i < left) {
      leftPrev = current;
    }
    if (i === left) {
      leftNode = current;
    }

    if (i === right) {
      rightNode = current;
      rightNext = rightNode.next;
    }
    current = current.next;
    i++;
  }
  if (rightNode) {
    rightNode.next=null;
  }

  rightNode = reverse(leftNode);
  if (leftPrev) {
    leftPrev.next= rightNode;
  }else{
    head= rightNode
  }

  if (leftNode) {
    leftNode.next= rightNext
  }
  return head;

};

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
reverseBetween(list.head, 2, 4);
