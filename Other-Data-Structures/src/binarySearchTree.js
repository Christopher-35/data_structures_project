var BinarySearchTree = function(value){
  let btree = Object.create(binaryMethods);
  btree.value = value;
  btree.right = null;
  btree.left = null;
  return btree;
}

let binaryMethods = {};

binaryMethods.insert = function(value){
// if (this.left === null && this.right===null){
//   this.value = value;
// }

if (value < this.value && this.left === null){
  this.left = new BinarySearchTree(value);
}
if (value < this.value && this.left !== null){
  this.left.insert(value);
}

if (value > this.value && this.right === null){
  this.right = new BinarySearchTree(value);
}
if (value > this.value && this.right !== null){
  this.right.insert(value);
}

if (value === this.value){
  return;
}


}

binaryMethods.contains = function(value){
  console.log('this', this.value);
  console.log('val', value);
  if (value === this.value) {
    return true;
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    console.log('val', value);
    return this.right.contains(value);
  } else {
    return false;
  }
}

binaryMethods.depthFirstLog = function(cb){
  cb(this.value);

  if (this.left){
    this.left.depthFirstLog(cb);
  }

  if (this.right){
    this.right.depthFirstLog(cb);
  }
}

let bSearch = BinarySearchTree(5);

bSearch.insert(5);
bSearch.insert(6);
bSearch.insert(7);
console.log(bSearch.contains(7));


console.log(bSearch);