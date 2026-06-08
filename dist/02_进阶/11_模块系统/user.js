"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAge = exports.userName = exports.User = exports.age = exports.name = void 0;
exports.greet = greet;
exports.name = "Alice";
exports.userName = exports.name;
exports.age = 25;
exports.userAge = exports.age;
function greet(message) {
    return "hello " + message;
}
class User {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        return "I am " + this.name;
    }
}
exports.User = User;
