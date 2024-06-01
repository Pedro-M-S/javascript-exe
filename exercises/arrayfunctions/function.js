//Function Declaration
function calculateAge(birthYear = 1900) {
    return 2024 - birthYear;
}

const defAge = calculateAge();
const age = calculateAge(1995);
console.log(defAge, age); // 124, 29

//Function Expression
const calculateArea = function (width, length) {
    return width * length;
}
const area = calculateArea(10, 20);
console.log(area); // 200

//Passing Function as Argument
const sum = function (a, b) {
    return a + b;
}
const sub = function (a, b) {
    return a - b;
}
const calc = function (a, b, fn) {
    return fn(a, b);
}
console.log(calc(10, 5, sum)); // 15
console.log(calc(10, 5, sub)); // 5

//Arrow Function
const arrowSum = (a, b) => a + b;

