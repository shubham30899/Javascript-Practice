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

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insertToFront(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this.remove(node);
    this.insertToFront(node);

    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;

      this.remove(node);
      this.insertToFront(node);
      return;
    }

    if (this.map.size >= this.capacity) {
      const lru = this.tail.prev;
      this.remove(lru);
      this.map.delete(lru.key);
    }

    const newNode = new Node(key, value);
    this.insertToFront(newNode);
    this.map.set(key, newNode);     
  }
}



const lru = new LRUCache(2);

lru.put(1, 1);  
lru.put(2, 2);
console.log(lru.get(1)); // 1 (1 becomes MRU)

lru.put(3, 3); // removes key 2 (LRU)
console.log(lru.get(2)); // -1

lru.put(4, 4); // removes key 1 (LRU)
console.log(lru.get(1)); // -1
console.log(lru.get(3)); // 3
console.log(lru.get(4)); // 4
