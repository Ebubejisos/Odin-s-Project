# Linked List (JavaScript)

A singly linked list implementation built with plain JS classes, developed test-first against a Jest suite.

## What is a Linked List?

A linear data structure made of `Node` objects, where each node holds a `value` and a `nextNode` pointer to the next node in the chain (or `null` if it's the last one). Unlike an array, nodes aren't stored contiguously in memory — traversal only happens by following `nextNode` references, starting from `head`.

This implementation is **singly linked**: each node only points forward. There's no `prevNode`, so any operation involving the tail (e.g. removing the last node) requires walking from the head to find it.

## Structure

- **`Node`** — holds `value` and `nextNode` (defaults to `null`).
- **`LinkedList`** — tracks `head` and `tail`, and exposes methods to build and query the chain.

## Methods Implemented

| Method                       | Description                                                        |
| ---------------------------- | ------------------------------------------------------------------ |
| `append(value)`              | Adds a new node to the end of the list                             |
| `prepend(value)`             | Adds a new node to the beginning of the list                       |
| `size()`                     | Returns the total number of nodes                                  |
| `getHead()`                  | Returns the value of the first node                                |
| `getTail()`                  | Returns the value of the last node                                 |
| `atIndex(index)`             | Returns the value of the node at a given index                     |
| `pop()`                      | Removes the head node and returns its value                        |
| `contains(value)`            | Returns `true`/`false` for whether a value exists in the list      |
| `findIndex(value)`           | Returns the index of the first node containing a value, or `-1`    |
| `toString()`                 | Returns a string representation, e.g. `( dog ) -> ( cat ) -> null` |
| `insertAt(index, ...values)` | Inserts one or more values at a given index                        |

## Key Areas the Exercise Covered

- **JS class syntax** — constructors, `this`, instance methods, and how properties/methods interact.
- **Pointer manipulation** — updating `head`/`tail` correctly, and in the right order (e.g. linking a new node before overwriting the old reference).
- **Traversal** — the core `while (current !== null) { ...; current = current.nextNode }` pattern used across nearly every method.
- **Edge cases** — empty lists, single-node lists, inserting at index `0`, and out-of-bounds indexes.
- **Splicing logic** — for `insertAt`, tracking both a `previous` and `current` node while traversing, so a new node (or chain of nodes) can be linked in without breaking the rest of the list.
- **Test-driven development** — writing implementations against a pre-existing Jest test suite rather than from a blank page.

## Use Cases of Linked Lists

- **Frequent insertions/removals at the start or middle** of a collection, where arrays would require costly shifting of elements.
- **Implementing other data structures** — stacks, queues, and hash map buckets (for collision handling) are commonly built on linked lists.
- **Unknown or highly variable size** — no need to resize/reallocate like a fixed-size array might.
- **Undo history / browser history** — sequences where you mainly move forward (or backward, with a doubly linked list) through items one at a time.
- **Memory-constrained environments** — nodes can be allocated non-contiguously, unlike arrays which need contiguous memory blocks.

**Trade-off to note:** linked lists lose fast random access (`O(n)` to reach an index, vs `O(1)` for arrays), so they're a better fit when insertions/removals dominate over indexed lookups.
