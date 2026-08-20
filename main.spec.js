const LinkedList = require('./main');

describe("LinkedList creation", () => {
  test("module exists", () => {
    expect(LinkedList).toBeDefined();
  });

  let list;
  beforeEach(() => {
    list = new LinkedList();
  });
  test("append adds a new node to the end of the list", () => {
    list.append("dog");
    list.append("cat");
    list.append("parrot");
    expect(list.head.value).toBe("dog");
    expect(list.tail.value).toBe("parrot");
  });

  test("prepend adds a new node to the beginning of the list", () => {
    list.prepend("dog");
    list.prepend("cat");
    expect(list.head.value).toBe("cat");
    expect(list.tail.value).toBe("dog");
  });
})

describe("LinkedList methods", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
    list.append("dog");
    list.append("cat");
    list.append("parrot");
    list.append("hamster");
    list.append("snake");
    list.append("turtle");
  });
  test("returns total number of nodes in the list", () => {
    expect(list.size()).toBe(6);
  })
  test("returns the first node in the list", () => {
    const result = list.getHead();
    expect(result).toBe("dog");
  })
  test("returns the last node in the list", () => {
    const result = list.getTail();
    expect(result).toBe("turtle");
  })
  test("returns undefined on getHead and getTail, if the list is empty", () => {
    const emptyList = new LinkedList();
    expect(emptyList.getHead()).toBeUndefined();
    expect(emptyList.getTail()).toBeUndefined();
  });
  test("returns node at given index", () => {
    expect(list.atIndex(5)).toBe("turtle");
  });
  test("returns undefined if index is out of bounds", () => {
    expect(list.atIndex(-1)).toBeUndefined();
    expect(list.atIndex(6)).toBeUndefined();
  });
  test("removes the head node and returns its value", () => {
    const removedValue = list.pop();
    expect(removedValue).toBe("dog");
    expect(list.getHead()).toBe("cat");
  });
  test("returns undefined if the list is empty when pop is called", () => {
    const emptyList = new LinkedList();
    expect(emptyList.pop()).toBeUndefined();
  });
  test("returns index of the first node containing the given value, or -1 if not found", () => {
    list.append("parrot");
    expect(list.findIndex("parrot")).toBe(2);
    expect(list.findIndex("rabbit")).toBe(-1);
  });
  test(" logs out linked list in a string representation", () => {
    const result = list.toString();
    expect(result).toBe("( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
  });
  test("inserts new nodes at a given index", () => {
    list.insertAt(1, "rabbit", "deer");
    const result = list.toString();
    expect(result).toBe("( dog ) -> ( rabbit ) -> ( deer ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
  });
  test("inserts new nodes at the head", () => {
    list.insertAt(0, "rabbit", "deer");
    const result = list.toString();
    expect(result).toBe("( rabbit ) -> ( deer ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
  })
  test("inserts new nodes at the tail", () => {
    list.insertAt(6, "rabbit", "deer");
    const result = list.toString();
    expect(result).toBe("( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> ( rabbit ) -> ( deer ) -> null");
  })
  test("throws RangeError if index provided for insertAt is out of bounds", () => {
    expect(() => list.insertAt(-1, "rabbit")).toThrow(RangeError);
    expect(() => list.insertAt(7, "rabbit")).toThrow(RangeError);
  });
  test("removes node at any index within range", () => {
    list.removeAt(2);
    const result = list.toString();
    expect(result).toBe("( dog ) -> ( cat ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
  });
  test("removes node at tail and makes the previous node the tail", () => {
    list.removeAt(5);
    const result = list.toString();
    expect(result).toBe("( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null");
    expect(list.getTail()).toBe("snake");
  });
  test("removes node at head and makes the next node the new head", () => {
    list.removeAt(0);
    const result = list.toString();
    expect(result).toBe("( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
    expect(list.getHead()).toBe("cat");
  });
})
