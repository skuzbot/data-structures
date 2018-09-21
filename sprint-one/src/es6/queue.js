class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.smallestKey = 0;
    this.largestKey = -1;
  }

  enqueue(value) {
    this.largestKey++;
    this.storage[this.largestKey] = value;
  }

  dequeue() {
    if (this.largestKey < this.smallestKey) {
      return undefined;
    }
    var temp = this.storage[this.smallestKey];
    delete this.storage[this.smallestKey];
    this.smallestKey++;
    return temp;
  }

  size() {
    return this.largestKey - this.smallestKey + 1;
  }
}
