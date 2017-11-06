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
var str = 'a';
var list2 = [1, 'a', false];
list2[1] = 0;
var a = 'a';
a.split('').join('');
function func() {
    throw 'a';
}
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
