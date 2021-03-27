export function callbackHell(callback) {
  setTimeout(callback("Hello World"), 1000);
}
