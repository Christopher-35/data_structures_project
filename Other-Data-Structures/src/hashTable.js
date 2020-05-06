var HashTable = function() {

    this._limit = 8;
    this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  var overRide = false;

    if (!bucket){
    bucket = [];
    this._storage[index] = bucket;
      }
  for (let i = 0; i < bucket.length; i++){
    var tupal = bucket[i];
    if(tupal[0] === k){
      tupal[1] = v;
      overRide = true;
    }
  }
  if (!overRide){
    bucket.push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (!bucket){
    return undefined;
  }
  for (let i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    if (tuple[0] === k){
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

    if (!bucket){
    return undefined;
      }
  for (let i = 0; i < bucket.length; i++){
    var tupal = bucket[i];
    if(tupal[0] === k){
      bucket.splice(i, 1);
    }
  }
  return undefined;
};
//c