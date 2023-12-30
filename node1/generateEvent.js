
import { EventEmitter } from 'events';

var eventEmitter = new EventEmitter();

//Create an event handler
var myEventHandler = function(data) {
    console.log(`Welcome To NodeJS!${data}`);
}

//Assign the event handler to an event:
eventEmitter.on('Hello',myEventHandler);

//Fire the 'Hello' Event
eventEmitter.emit('Hello',' 20.10.1');

var myAddition = (a,b) => {
    console.log(`Addition of 2 no.s ${a+b}`)
}

eventEmitter.on('Add',myAddition);

eventEmitter.emit('Add',20,30)