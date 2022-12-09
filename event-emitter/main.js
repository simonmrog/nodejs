const { Array } = require("./array"); 

const array = new Array();

// Subscriptions
array.on("add", function itemAdded(value) {
  console.log(`[ADD] "${value}" was added successfully`, this.data);
});

array.once("add", function firstTime() {
  console.log("[ADD] An item was added to the array for the first time");
});

array.on("pop", function itemPopped() {
  console.log("[POP] Item popped successfully");
});

array.on("pop", function afterRemoving() {
  console.log("[POP] After removing the item the array is", this.data);
});

array.once("pop", function firstTime() {
  console.log("[POP] An item was popped from the array for the first time");
});

array.on("error", function errorHandler(err) {
  console.error("[ERROR]", err.message);
});

// Events
array.add("foo");
array.add("bar");
array.add("baz");
array.add("quux");
array.pop();
array.pop();

// Listener count
console.log(array.listenerCount("pop"));

// Raw listeners
console.log(array.rawListeners('pop'));
