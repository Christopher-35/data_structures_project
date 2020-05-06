var Queue = function(){
  this.storage = {};
  this.start = 0;
  this.end = 0;
  this.length = 0;
};

Queue.prototype.enqueue = function(input){
  this.storage[this.end]=input;
  this.end++;
  this.length++;
};

Queue.prototype.dequeue = function(){
  let temp = 0;
  if (this.length > 0){
    temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    this.length--;
  }
  return temp;
};

Queue.prototype.size = function(){
  return this.length;
};

