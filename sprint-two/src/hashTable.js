

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);//can use .get here
  this.count = 0;

};
//GetIndexBelowMaxKey = gets an index below our limit which is 8
//.Get will out put the string given the index
//.set will create a property
HashTable.prototype.insert = function(k, v) {
  //var index = getIndexBelowMaxForKey(k, this._limit);
  var i = getIndexBelowMaxForKey(k, this._limit);//gets index below the length
  if (!this._storage.get(i)) {//if storage has a falsy return value
    this._storage.set(i, []);//assign the index to an array
  }
  var bucket = this._storage.get(i);  //create a bucket that's value is equal to the value of our index
  for (var j = 0; j < bucket.length; j++) {//create for loop of bucket length
    if (bucket[j][0] === k) {  //if the first key of the bucket is equal to our input,
      bucket[j][1] = v;  //we assign the second index to its value (v)
      //return;
    }
  }
  bucket.push([k, v]); //we push and array of these values into the bucket
  this.count++; //then increase the incrementer by 1

};

//should store
HashTable.prototype.retrieve = function(k) {//hashTable.insert('Steven', 'Seagal'), expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  var i = getIndexBelowMaxForKey(k, this._limit);//returns an index below the length value

  var bucket = this._storage.get(i);//created a bucket var that will give us an value for our index
  if (!bucket) { //if the value doesn't exist
    //return;
  }
  for (var j = 0; j < bucket.length; j++) {//go through the bucket array
    if (bucket[j][0] === k) {  //if the first element in that first array is equal to our first input,
      return bucket[j][1];  //return its corresponding output
    }
  }
};

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);//create bucket that will give us value of our index

  if (!bucket){//just return nothing if bucket is undefined
    //return;
  }

  for (var j = 0; j < bucket.length; j++){//iterate through bucket length
    if (bucket[j][0] === k){//if any of the buckets arrays contain our input
      bucket.splice(j,1);//we remove that input
      this.count --;  //decrement counter bc we removed the value
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


