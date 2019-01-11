'use strict';

const pass = 'kpi';
const key = 10;

let buffer = pass.split('');
buffer = buffer.map(symbol => symbol.charCodeAt() ^ key);
buffer = buffer.map(symbol => String.fromCharCode(symbol));
buffer = buffer.reduce((previous, value) => previous + value);

console.log(buffer); // azc
