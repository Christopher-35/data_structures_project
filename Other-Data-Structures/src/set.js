//PROTOTYPAL STYLE
var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;                       
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
    if (this.storage[item]===item){
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this.storage[item] ===item){
    delete this.storage[item];
  }
};


