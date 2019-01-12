'use strict';

function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}

function LinkedList() {
  this.first = null;
  this.last = null;
  this.length = 0;
}

LinkedList.prototype.push = function(data) {
  const node = new Node(this, data);
  node.prev = this.last;
  if (this.length === 0) this.first = node;
  else this.last.next = node;
  this.last = node;
  this.length++;
  return node;
};

LinkedList.prototype.pop = function() {
  if (this.length === 0) return null;
  const node = this.last;
  this.last = node.prev;
  this.last.next = null;
  this.length--;
  return node.data;
};

LinkedList.prototype.unshift = function(data) {
  const node = new Node(this, data);
  node.next = this.first;
  if (this.length === 0) this.last = node;
  else this.first.prev = node;
  this.first = node;
  this.length++;
  return node;
};

LinkedList.prototype.shift = function() {
  if (this.length === 0) return null;
  const node = this.first;
  this.first = node.next;
  this.first.prev = null;
  this.length--;
  return node.data;
};

//Usage

const list = new LinkedList();
list.push({ number: 'one' });
list.push({ number: 'two' });
list.pop();
list.unshift({ number: 'zero' });
list.shift();
console.log(list);
