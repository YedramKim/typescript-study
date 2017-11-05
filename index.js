"use strict";
exports.__esModule = true;
var module_1 = require("./module/module");
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
console.log(module_1.num);
var array = [1];
var tuple = ['a', 1];
var Color;
(function (Color) {
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Green"] = 101] = "Green";
    Color[Color["Blue"] = 102] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
console.log(Color[100]);
console.log(Color.Green);
console.log(Color.Blue);
