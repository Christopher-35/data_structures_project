// class Tree {
// constructor(value){
//   this.value = value;
//   this.children = [];
// }

// addChild = function(value){
// this.children.push(new Tree(value));
// }

// contains = function(value){

//   if (this.value === value){
//   return true;
// } else {
//   for (let i=0; i < this.children.length; i++){
//     if (this.children[i].contains(value)){
//       return true;
//     }
//   }
//   return false;
// }
// }
// }

class Tree {
  constructor (value) {
    this.value = value
    this.children = [];
  }

  addChild (value) {
    this.children.push(new Tree(value));
  }

  contains (value) {
    for (let i = 0; i < this.children.length; i++){
      if (this.children[i].value === value){
        return true;
      }
      if (this.children[i].children.length && this.children[i].contains(value) === true) {
        return true;
      }
  }

    return false;
  }
}