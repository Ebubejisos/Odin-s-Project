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
  test("returns undefined if the list is empty", () => {
    const emptyList = new LinkedList();
    expect(emptyList.getHead()).toBeUndefined();
    expect(emptyList.getTail()).toBeUndefined();
  });
})