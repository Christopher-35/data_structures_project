var Queue = function() {

  var obj = Object.create(queueMethods);
  obj.length = 0;
  obj.storage = {};
  obj.top = 0;
  obj.bottom = 0;
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.top] = value;
  this.top++;
  this.length++;

};

queueMethods.dequeue = function() {
  if (this.length > 0) {

    let temp = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.length--;
    this.bottom++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.length;
};

