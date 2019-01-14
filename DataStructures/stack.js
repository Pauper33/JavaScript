'use strict';

function Stack() {
  this.last = null;

  this.push = function(data) {
    const element = { prev: null, data };
    element.prev = this.last;
    this.last = element;
  };

  this.pop = function() {
    const element = this.last;
    if (!element) return null;
    this.last = element.prev;
    return element.data;
  };
}

const list = new Stack();

//Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

list.push(obj1);
list.push(obj2);
list.push(obj3);
list.pop();
console.log(list.last);
