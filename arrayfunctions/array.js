//Array Methods
let array;
//Map
//The map() method creates a new array with the results of calling a provided function on every
//element in the calling array.
array = [1, 2, 3, 4, 5];
const mapArray = array.map((num) => num + 10);
console.log(mapArray); // [11, 12, 13, 14, 15]

//Sort
//The sort() method sorts the elements of an array in place and returns the sorted array.
array = [1, 2, 3, 4, 5];
const descArray = array.sort((a, b) => b - a);
console.log(descArray); // [5, 4, 3, 2, 1]
const ascArray = descArray.sort((a, b) => a - b);
console.log(ascArray); // [1, 2, 3, 4, 5]

//Filter
//The filter() method creates a new array with all elements that pass the test implemented by the
//provided function.
array = [1, 2, 3, 4, 5];
const filterArray = array.filter((num) => num % 2 === 0);
console.log(filterArray); // [2, 4]

//For Each
//The forEach() method executes a provided function once for each array element.
array = [1, 2, 3, 4, 5];
array.forEach((num, index) =>
    console.log("Index:" + index + " " + "Number:" + num )); // Index:0 Number:1

//Reduce
//The reduce() method executes a reducer function (that you provide) on each element of the array,
//resulting in a single output value.
array = [1, 2, 3, 4, 5];
const sum = array.reduce((total, num) => total + num);
console.log(sum); // 15

//Find
//The find() method returns the value of the first element in the provided array that satisfies the
//provided testing function.
array = [1, 2, 3, 4, 5];
const num = array.find((num) => num === 3);
console.log(num); // 3

//Find Index
//The findIndex() method returns the index of the first element in the provided array that satisfies
//the provided testing function.
array = [1, 2, 3, 4, 5];
const index = array.findIndex((num) => num === 3);
console.log(index); // 2

//Push
//The push() method adds one or more elements to the end of an array and returns the new length of
//the array.
array = [1, 2, 3, 4, 5];
console.log(array.push(6)); // 6
console.log(array); // [1, 2, 3, 4, 5, 6]

//Pop
//The pop() method removes the last element from an array and returns that element. This method
//changes the length of the array.
array = [1, 2, 3, 4, 5];
console.log(array); // [1, 2, 3, 4]