'use strict';

const str = 'Hello World';
const key = 'ViGeNeRe'; //[ 8, 1, 19, 23, 0, 23, 4, 23 ] key of caesar
let buffer = str.split('');
const keyBuff = key.split('').map(letter => letter.charCodeAt() % 26);

const check = (number, index) => {
  if (number >= 65 && number <= 90) {
    number += keyBuff[index % (keyBuff.length)];
    if (number > 90) number = 65 + number % 91;
  } else if (number >= 97 && number <= 122) {
    number += keyBuff[index % (keyBuff.length)];
    if (number > 122) number = 97 + number % 123;
  }
  return number;
};

buffer = buffer.map(letter => letter.charCodeAt());
buffer = buffer.map((number, index) => check(number, index));
buffer = buffer.map(number => String.fromCharCode(number));
buffer = buffer.reduce((previos, letter) => previos + letter);

console.log(buffer); //Pfeio Alzmw
