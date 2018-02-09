'use strict';

const events = require('events'),
      ee = new events.EventEmitter();

let sec = 0,
    min = 0;

let second = function() {
  setTimeout(function() {
    sec++;
    if(sec === 60) {
      sec = 0;
      ee.emit('minute');
    } 
    if (sec < 10) {
      console.log(min + ':0' + sec);
    } else {
      console.log(min + ':' + sec);
    }
    ee.emit('second');
  }, 1000);
}

let minute = function() {
  min++;
  if (min === 60) {
    min = 0;
    sec = 0;
  }
}

ee.on('second', second);
ee.on('minute', minute);


second();

