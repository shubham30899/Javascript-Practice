class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    
    // Dummy head and tail to avoid edge cases
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Remove a node from the linked list
  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // Add a node right after the head (most recent position)
  _add(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this._remove(node);
    this._add(node); // move to most recent
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this._remove(node);
      this._add(node);
    } else {
      if (this.map.size >= this.capacity) {
        // Remove LRU (node before tail)
        const lru = this.tail.prev;
        this._remove(lru);
        this.map.delete(lru.key);
      }

      const newNode = new Node(key, value);
      this.map.set(key, newNode);
      this._add(newNode);
    }
  }

  // Helper: show current cache state
  printCache() {
    let curr = this.head.next;
    const result = [];
    while (curr !== this.tail) {
      result.push(`[${curr.key}:${curr.value}]`);
      curr = curr.next;
    }
    console.log(result.join(" -> "));
  }
}

const cache = new LRUCache(3);

cache.put(1, "A");
cache.put(2, "B");
cache.put(3, "C");
cache.printCache(); // [3:C] -> [2:B] -> [1:A]

cache.get(1);
cache.printCache(); // [1:A] -> [3:C] -> [2:B]

cache.put(4, "D"); // Evicts 2:B
cache.printCache(); // [4:D] -> [1:A] -> [3:C]
