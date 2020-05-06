var Queue = function() {
  var obj = {};
  obj.length = 0;
  obj.storage = {};
  obj.top = 0;
  obj.bottom = 0;
  Object.assign(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.top] = value; //temporary var for storing a key value pair,
  this.top++; //then increment the key and return temp
  this.length++;
  return top;
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

