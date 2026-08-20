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
  // returns node at given index
  atIndex(index) {
    if (index < 0) return undefined;
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === index) {
        return current.value;
      }
      count++;
      current = current.nextNode;
    }
    return undefined;
  };
  // removes the head node and returns it's value
  pop() {
    if (!this.head) return undefined;
    const headNode = this.head;
    this.head = headNode.nextNode;
    return headNode.value;
  };
  // checks if a value exists in the list
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      };
      current = current.nextNode;
    }
    return false;
  };
  // returns index of the first node containing the given value, or -1 if not found
  findIndex(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.nextNode;
    }
    return -1;
  };
  // logs out linked list in a string representation
  toString() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    };
    return result + "null";
  };
  // inserts new nodes at the start of a given index
  insertAt(index, ...values) {
    if (values.length === 0) {
      throw new Error("No values provided for insertion");
    };
    if (index < 0 || index > this.size()) {
      throw new RangeError("Index out of bounds");
    }
    let currentIndex = 0;
    let current = this.head;
    let prevNode;
    while (current !== null || currentIndex === index) {
      if (currentIndex === index) {
        if (current === this.head) {
          values.reverse().forEach(value => this.prepend(value));
        } else if (prevNode === this.tail) {
          values.forEach(value => this.append(value));
        } else {
          values.forEach(value => {
            value = new Node(value);
            value.nextNode = current;
            prevNode.nextNode = value;
            prevNode = value;
          })
        }
        return;
      }
      currentIndex++;
      prevNode = current;
      current = current.nextNode;
    }
  };
  // removes node at given index
  removeAt(index) {
    if (index < 0 || index > this.size() - 1) {
      throw new RangeError("Index out of bounds");
    }
    let current = this.head;
    let currentIndex = 0;
    let prevNode;
    while (current !== null || currentIndex === index) {
      if (currentIndex === index) {
        if (current === this.head) {
          this.pop();
          return;
        }
        prevNode.nextNode = current.nextNode;
        if (current === this.tail) {
          this.tail = prevNode;
        };
        return;
      }
      currentIndex++;
      prevNode = current;
      current = current.nextNode;
    }
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  };
};

module.exports = LinkedList;
