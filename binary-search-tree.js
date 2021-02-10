class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    let current = this.root;

    if (current === null) this.root = newNode;

    while (current) {
      if (val < current.val && current) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          break;
        }
      }
      else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          break;
        }
      }
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    function _traverse(current) {
      if (!current) return;

      if (val < current.val) {
        if (current.left) {
          _traverse(current.left);
        } else {
          current.left = newNode;
        }
      } else {
        if (current.right) {
          _traverse(current.right);
        } else {
          current.right = newNode;
        }
      }
    }

    _traverse(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (val === current.val) return current;

      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let root = this.root;

    function _traverse(current) {
      if (!current) return;

      if (val === current.val) return current;

      if (val < current.val) {
        return _traverse(current.left);
      } else {
        return _traverse(current.right);
      }
    }

    return _traverse(root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];
    let root = this.root;

    function _dfsPreOrder(current, visited){
      visited.push(current.val);
      if (current.left) _dfsPreOrder(current.left, visited);
      if (current.right) _dfsPreOrder(current.right, visited);
    }

    _dfsPreOrder(root, visited);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    let root = this.root;

    function _dfsInOrder(current, visited){
      if(current.left) _dfsInOrder(current.left, visited);
      visited.push(current.val);
      if(current.right) _dfsInOrder(current.right, visited);
    }

    _dfsInOrder(root, visited);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    let root = this.root;

    function _dfsPostOrder(current, visited){
      if(current.left) _dfsPostOrder(current.left, visited);
      if(current.right) _dfsPostOrder(current.right, visited);
      visited.push(current.val);
    }

    _dfsPostOrder(root, visited);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    let toVisitQueue = [this.root];

    while (toVisitQueue.length){
      let current = toVisitQueue.shift();

      visited.push(current.val);
      
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
