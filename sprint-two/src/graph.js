var Graph = function(){
  this.nodes = {};  //object we created at key nodes
  this.randomIndex = 0;  //value 0 from key arbitrary index
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  if (!this.contains(node)) { //if the input is not found in our object
    this.nodes[this.randomIndex] = GraphNode(node);  // we must assign our node to a storage called arbitrary index, and within this index we set the value of the node
    this.randomIndex++;  //increment the index for the next node we add
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  for (var i in this.nodes) {  //to see if our obj contains our node, we use a for in loop
    if (this.nodes[i].value === node) { //if the node is equal to the value that we're looking for
      return true;                      //we return true
    }
  }
  return false;                         //else we return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  for (var i in this.nodes) {          //create a for in loop of this.nodes prop
    if (this.nodes[i].value === node) { //if the nodes value is equal to our target
      for (var j in this.nodes[i].edges) { //we're going to iterate through that nodes edges
        var edgeInd = this.search(node, this.nodes[i].edges[j].edges);//create a variable that's using the search method
        delete this.nodes[i].edges[j].edges[edgeInd];//then delete that edgeIndex
      }
      delete this.nodes[i];  //and deletes node from graph
      //return;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var graphInd = this.search(fromNode, this.nodes);//create var that searches for the input index
  for (var edgeInd in this.nodes[graphInd].edges) {//use a for in loop to iterate over our index of fromNode??
    if (this.nodes[graphInd].edges[edgeInd].value === toNode) {//if the value is equal to our input
      return true;
    }
  }
  return false;//else return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var fromInd = this.search(fromNode, this.nodes); //creates from index so we can use it to add an edge
  var toInd = this.search(toNode, this.nodes);     //create a to index to add the edge to
  this.nodes[fromInd].edges[this.nodes[fromInd].edgeInd] = this.nodes[toInd];  //create a nexted property for the to index
  this.nodes[toInd].edges[this.nodes[toInd].edgeInd] = this.nodes[fromInd];  //create nested property for from index
  this.nodes[fromInd].edgeInd++;//then increment from index
  this.nodes[toInd].edgeInd++;  //increment to index
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromInd = this.search(fromNode, this.nodes);  //creates from index
  var toEdgeInd = this.search(toNode, this.nodes[fromInd].edges);//creates to index
  var fromEdgeInd = this.search(fromNode, this.nodes[fromInd].edges[toEdgeInd].edges);  //creates from Edge index
  delete this.nodes[fromInd].edges[toEdgeInd].edges[fromEdgeInd]; //delete from edge
  delete this.nodes[fromInd].edges[toEdgeInd]; //delete the other edge
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var i in this.nodes) { // run through for loop for each node
    cb(this.nodes[i].value);  //invoke the callback input on each value in the for loop
  }
};

// callback takes in node, and index
Graph.prototype.search = function(value, obj) {
  for (var i in obj) { //for loop through given obj
    if (obj[i].value === value) { //see if the value of that obj is equal to the value
      return i;  //return the key
    }
  }
};

var GraphNode = function(value) {
  var node = {};  //create obj
  node.value = value; //create a value for that node
  node.edges = {};  //create an edgest var
  node.edgeInd = 0; // also arbitrary index
  return node; //return that obj
};

/*
 * Complexity: What is the time complexity of the above functions?
 */