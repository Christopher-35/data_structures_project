var BinarySearchTree = function(value){
  let btree = Object.create(binaryMethods);
  btree.value = value;
  btree.right = null;
  btree.left = null;
  return btree;
}

let binaryMethods = {};

binaryMethods.insert = function(value){
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
  let overide = false;
  let currentNode = this;
  console.log(currentNode);
  while(currentNode){
    if (currentNode.value === value){
      overide = true;
      break;
    }

    if (value < currentNode.value){
      currentNode = currentNode.left;
    }

    if (value > currentNode.value){
      currentNode = currentNode.right;
    }

  }

  return overide;


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