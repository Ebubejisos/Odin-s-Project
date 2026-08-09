class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  };
  // add new node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    };
  };
  // add new node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    };
  };
  // returns the total number of nodes in the list
  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.nextNode;
    };
    return count;
  };
  // returns the first node in the list
  getHead() {
    if (!this.head) {
      return undefined;
    }
    return this.head.value;
  }
  getTail() {
    if (!this.tail) {
      return undefined;
    }
    return this.tail.value;
  }

};

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  };
};

module.exports = LinkedList;
