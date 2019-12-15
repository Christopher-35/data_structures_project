var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  return this._storage[item] = true; //adds value to set, and assigns a boolean value to
};

setPrototype.contains = function(item) {
    if (this._storage[item]){
    return this._storage[item];
    }
    return false; //returns true or false on whether the object contains this item
};   

setPrototype.remove = function(item) {
  delete this._storage[item]
    
   // completely deletes item, 
  //tryed returning this but didnt work, why is this the case????
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
