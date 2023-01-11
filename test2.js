const EventMitter = require('events');

const myEmitter = new EventMitter();

setImmediate(() => {
    myEmitter.emit("TEST_EVENT");
});


myEmitter.on("TEST_EVENT", () =>{
    console.log("TEST_EVENT was fired");
});

myEmitter.on("TEST_EVENT", () =>{
    console.log("TEST_EVENT was fired");
});

myEmitter.on("TEST_EVENT", () =>{
    console.log("TEST_EVENT was fired");
});
