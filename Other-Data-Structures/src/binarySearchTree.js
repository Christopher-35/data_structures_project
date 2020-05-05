var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  obj.right = null;
  obj.left = null;
  _.extend(obj, tMethods);
//obj.count = 0;
  return obj;
};

var tMethods = {
  // left: function(){
  // this.left = null;
  // },

  // right: function(){
  // this.right =
  // },

  insert: function(value) {
    //this.count++;

    if (value < this.value) {
      if (this.left === null) {
        this.left = value;
      } else {
        this.insert(this.right);
      }
    }
    if (value > this.value) {
      if (this.right === null) {
        this.right = value;
      } else {
        this.insert(this.left);
      }
    }
  },

  addChild: function(value) {},

  contains: function(value) {}
};
// BinarySearchTree.prototype.left = function(){

// }

// BinarySearchTree.prototype.right = function(){

// }

/*
 * Complexity: What is the time complexity of the above functions?
 */
