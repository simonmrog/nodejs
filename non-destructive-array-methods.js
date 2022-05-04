// Destructive array methods: sort(), reverse(), splice(), arr[index] = x

const assert = require("assert");

if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function () {
    return this.slice().sort();
  };
}

if (!Array.prototype.toReversed) {
  Array.prototype.toReversed = function () {
    return this.slice().reverse();
  };
}

if (!Array.prototype.toSpliced) {
  Array.prototype.toSpliced = function (index, deletedCount, ...items) {
    const copy = this.slice();
    copy.splice(index, deletedCount, ...items);
    return copy;
  };
}

if (!Array.prototype.with) {
  Array.prototype.with = function (index, value) {
    const copy = this.slice();
    copy[index] = value;
    return copy;
  };
}

const array = ["a", "c", "x", "d", "k"];
const sorted = array.toSorted();
assert.deepEqual(array, ["a", "c", "x", "d", "k"]);
assert.deepEqual(sorted, ["a", "c", "d", "k", "x"]);

const reversed = array.toReversed();
assert.deepEqual(array, ["a", "c", "x", "d", "k"]);
assert.deepEqual(reversed, ["k", "d", "x", "c", "a"]);

const spliced = array.toSpliced(1, 3, "W");
assert.deepEqual(array, ["a", "c", "x", "d", "k"]);
assert.deepEqual(spliced, ["a", "W", "k"]);

const replaced = array.with(3, "new");
assert.deepEqual(array, ["a", "c", "x", "d", "k"]);
assert.deepEqual(replaced, ["a", "c", "x", "new", "k"]);

console.log("Methods executed successfully");
