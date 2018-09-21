class Stack {

  constructor() {
    this.storage = {};
    this.height = 0;
  }

  push(value) {
    this.height++;
    this.storage[this.height] = value;
  }

  pop() {
    if (this.height <= 0) {
      return undefined;
    } else {
      var temp = this.storage[this.height];
      delete this.storage[this.height];
      this.height--;
      return temp;
    }
  }

  size() {
    return this.height;
  }
}