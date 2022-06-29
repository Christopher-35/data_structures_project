const Queue = function () {
  this.storage = {};
  this.length = 0;
  this.top = 0;
  this.bottom = 0;
}

Queue.prototype.enqueue = function (value) {
  this.top++;
  this.length++;
  this.storage[this.top] = value;
}

Queue.prototype.dequeue = function () {
  if (this.length > 0){
    this.bottom++;
    let removedValue = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.length--;
    return removedValue;
  }
}

Queue.prototype.size = function () {
  return this.length;
}

