const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        const node = new Node(data);
        if (this._head === null) {
          this._head = node;
          this._tail = node;
        } else {
          node.prev = this._tail;
          this._tail.next = node;
          this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head === null) {
			return null;
		} else return this._head.data;
    }

    tail() {
        if (this._tail === null) {
			return null;
		} else return this._tail.data;
    }

    at(index) {
		let current = this._head;
		let counter = 0;

		while (counter !== index) {
			current = current.next;
			counter += 1;
		}

		return current.data;
    }

    insertAt(index, data) {
      if (this._head === this._tail) {
        this.append(data);
        return this;
      }
  
      let count = 0;
      let node = this._head;
      while (count < index) {
        node = node.next;
        count++;
      }
      const newNode = new Node(data, node.prev, node);
      node.prev.next = newNode;
      node.prev = newNode;
      this.length += 1;
      return this;
    }

    isEmpty() {
        if (this._head === null){
            return true;
        }else{
            return false;
        }
    }

    clear() {
		this._head = null;
		this._tail = null;
		this.length = 0;
    }

    deleteAt(index) {
      if (this._head === this._tail) {
        this.clear();
      } else {
        let count = 0;
        let node = this._head;
        while (count < index) {
          node = node.next;
          count++;
        }
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
        this.length -= 1;
      }
      return this;
    }

    reverse() {
      let node = this._head;
      while (node !== this._tail) {
        const nextNode = node.next;
        const next = node.next;
        const prev = node.prev;
        node.prev = next;
        node.next = prev;
        node = nextNode;
      }
      node.next = node.prev;
      node.prev = null;
      this._tail = this._head;
      this._head = node;
      return this;
    }

    indexOf(data) {
        let crnt = this._head;
		let counter = 0;

		while (crnt) {
			if (crnt.data === data) {
				return counter;
			}
			crnt = crnt.next;
			counter += 1;
		}

		return -1;
	}
    }


module.exports = LinkedList;
