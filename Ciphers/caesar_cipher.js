'use strict';

const str = 'Hello World';
const key = 1; //H -> I; e => f
let buffer = str.split('');

const check = num => {
  if (num >= 65 && num <= 90) {
    num += key;
    if (num > 90) num = 65 + num % 91;
  } else if (num >= 97 && num <= 122) {
    num += key;
    if (num > 122) num = 97 + num % 123;
  }
  return num;
};

buffer = buffer.map(letter => letter.charCodeAt());
buffer = buffer.map(num => check(num));
buffer = buffer.map(num => String.fromCharCode(num));
buffer = buffer.reduce((previos, letter) => previos + letter);

console.log(buffer); //Hfmmp Xpsme
