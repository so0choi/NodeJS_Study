"use strict";

module.exports = { a: "A" };
exports.b = "B";
console.log(exports === module.exports);
console.log(module);
