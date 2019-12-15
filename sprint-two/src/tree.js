var Tree = function(value) {
  var newTree = {};  //THISSSSSSSSSSSSSS
  newTree.value = value;

  // your code here
  newTree.children = [];  // create a children to store the values 
  _.extend(newTree, treeMethods); //extend properties of newTree to match treeMethods
  return newTree;  //return that newTree Object
};

var treeMethods = {};//create obj called treeMethods

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));//push the value inside the child property (an array)
};

treeMethods.contains = function(target) {
  if (this.value === target) {//if we contain the value in our originall parent nodes????????
    return true;  //if so return true
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;  //create array to search through children in the tree
    }               //return true if that value matches our target
  }
  return false;     //return false if we can't find that child
}
  



/*
 * Complexity: What is the time complexity of the above functions?
 for addChild it's constant time lookup
 for contains its O(n!)
 */
