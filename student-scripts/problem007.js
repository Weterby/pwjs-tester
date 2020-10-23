function findMax() {
    let args = Array.prototype.slice.call(arguments);
    return Math.max(...args);
}