var Graph = function(){
  this.storage = {};
}

Graph.prototype.addNode = function(node){
this.storage[node] = {};
}

Graph.prototype.removeNode = function(node){
  if (this.storage[node]) { delete this.storage[node]  }

  for (let key in this.storage){
    if (this.storage[key][node]){
      delete this.storage[key][node];
    }
  }
}

Graph.prototype.contains = function(node){
  if (this.storage[node]){
    return true;
  } else {
    return false;
  }
}

Graph.prototype.addEdge = function(node1, node2){
 if (this.storage[node1]){
  this.storage[node1][node2] = node2;
 }
 if (this.storage[node2]) {
  this.storage[node2][node1] = node1;
 }

}

Graph.prototype.removeEdge = function(node1, node2){
 delete this.storage[node1][node2]
 delete this.storage[node2][node1]
}

Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.storage[fromNode][toNode] !== undefined) {return true}

  else {
    return false;
  }
}

Graph.prototype.forEachNode = function(cb){

  for (var key in this.storage){
    cb(key);
  }
}