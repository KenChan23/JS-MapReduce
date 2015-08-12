var Node = require('./node');

/**
 * A linked list is a linear data structure where each element is a separate object.
 * Given its a dynamic data structure, the number of nodes is not fixed, and the list
 * can grow and shrink on demand.
 * @param {void}
 * @return {LinkedList}
 */
var LinkedList = module.exports = function LinkedList(){
  this.head = null;
  this.length = 0;
};

/**
 * Add a new item to the end of the linked list.
 * @param {int}
 * @return {void}
 */
LinkedList.prototype.append = function(data){
  var current;
  var node = new Node(data);

  //  If the linked list has no element, make the head the new node.
  if(!head){
    this.head = node;
  }
  else{
    current = this.head;

    while(current.getNext()){
      current = current.getNext();
    }

    //  Iterate until the last item is obtained.
    //  The last item has no next node.
    current.setNext(node);
  }

  this.length++;
};

/**
 * Insert an element at any position within the linked list.
 * @param {int}
 * @param {int}
 * @return {boolean}
 */
LinkedList.prototype.insert = function(position, data){
  //  Check if out-of-bounds
  if(position >= 0 && position <= this.length){
    var node = new Node(data);
    var current = this.head;
    var previous;
    var index = 0;

    //  Inserting into the first position.
    if(position === 0){
      node.setNext(current);
      this.head = node;
    }
    else{
      while(index++ < position){
        previous = current;
        current = current.getNext();
      }
      node.setNext(current);
      previous.setNext(node);
    }

    //  Don't forget to increment the length!
    this.length++;
    return true;
  }
  else{
    return false;
  }
};

/**
 *
 * @param {}
 * @return {}
 */
LinkedList.prototype.remove = function(){

};

/**
 * Finds an element and retrieves its position from the linked list.
 * @param {int}
 * @return {int}
 */
LinkedList.prototype.indexOf = function(data){
  var current = this.head;
  var index = -1;

  while(current){
    if(data === current.getData()){
      return index;
    }
    index++;
    current = current.getNext();
  }

  return -1;
};

/**
 * Removes an element from a specified position in the linked list.
 * @param {int}
 * @return {int}
 */
LinkedList.prototype.removeAt = function(position){
  //  Check if out-of-bounds
  if(position >= 0 && position <= this.length){
    var current = this.head;
    var previous;
    var index = 0;

    if(position === 0){
      //  Remove the first element.
      this.head = current.getNext();
    }
    else{
      while(index++ < position){
        previous = current;
        current = current.getNext();
      }

      //  "Skip" over an element.
      previous.setNext(current.getNext());
    }

    this.length--;
    return current.getData();
  }
  else{
    return null;
  }
};

/**
 * Check if the linked list has not elements or not.
 * @param {void}
 * @return {int}
 */
LinkedList.prototype.isEmpty = function(){
  return this.length === 0;
};

/**
 * Get the number of elements within the linked list.
 * @param {void}
 * @return {int}
 */
LinkedList.prototype.size = function(){
  return this.length;
};

/**
 * Get the head of the linked list.
 * @param {void}
 * @return {Node}
 */
LinkedList.prototype.getHead = function(){
  return this.head;
};

/**
 * Overwrite the default toString() method.
 * @param {void}
 * @return {String}
 */
LinkedList.prototype.toString = function(){
  var string = '[';
  var current = this.head;

  while(current){
    string += current.getData();
    current = current.getNext();
    if(current){
      string += ' ';
    }
    else{
      string += ']'
    }
  }

  return string;
};
