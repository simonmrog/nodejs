const EventEmitter = require("events");

class Array extends EventEmitter {
  constructor() {
    super();
    this.data = [];
  }

  add(value) {
    this.data.push(value);
    this.emit("add", value);
  };
  
  pop() {
    this.data.pop();
    this.emit("pop");
  }
}

module.exports = { Array };