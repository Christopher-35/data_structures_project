class Tree {
constructor(value){
  this.value = value;
  this.children = [];
}

addChild = function(value){
this.children.push(new Tree(value));
}

contains = function(value){

  if (this.value === value){
  return true;
} else {
  for (let i=0; i < this.children.length; i++){
    if (this.children[i].contains(value)){
      return true;
    }
  }
  return false;
}
}
}