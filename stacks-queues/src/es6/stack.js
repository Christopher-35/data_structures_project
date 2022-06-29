class Stack {
  constructor () {
    this.storage = {};
    this.length = 0;
  }

  push (value) {
    this.length++;
    this.storage[this.length] = value;
  }

  pop () {
    if (this.length > 0){
      let value = this.storage[this.length];
      delete this.storage[this.length];
      this.length--;
      return value;
    }
  }

  size () {
    return this.length;
  }
}