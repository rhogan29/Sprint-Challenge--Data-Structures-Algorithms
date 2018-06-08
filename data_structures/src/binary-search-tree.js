class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    /* Your code here */
    cb(this.value);
    if(this.left) {
      this.left.depthFirstForEach(cb);
    }
    if(this.right) {
      this.right.depthFirstForEach(cb);
    }
  }

  breadthFirstForEach(cb) {
    /* Your code here */
    let list = [this]; // create an array passed with this.
    for (let i = 0; i < list.length; i++) { // iterate through that array
      let myNode = list[i]; // set a variable for the current index.

      if(myNode.left) list.push(myNode.left); // if there is a left branch to the index, push it into the array
      if(myNode.right) list.push(myNode.right); // if there is a right index, push that in as well. 
      cb(myNode.value); // call the callback on each node, passed with the value.
    }
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;