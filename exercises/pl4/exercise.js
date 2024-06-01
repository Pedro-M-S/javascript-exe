//Lab 1
//Sum Two Numbers
const sumTwo = (a, b) => a + b;
console.log(sumTwo(2, 3)); //5
//Sum Three Numbers
const sumThree = (a, b, c) => a + b + c;
console.log(sumThree(2, 3, 4)); //9
//Reverse a Number
const reverseNumber = (num) => parseInt(num.toString().split("").reverse().join(""));
console.log(reverseNumber(123)); //321
//Palindrome
const isPalindrome = (str) => str === str.split("").reverse().join("");
console.log(isPalindrome("ana")); //true
console.log(isPalindrome("121")); //true
//Alphabetical Order
const alphabeticOrder = (str) => str.split("").sort().join("");
console.log(alphabeticOrder("reorder"));
//Insert Dashes
const insertDashes = (num) => {
    const strNum = num.toString();
    let res = strNum[0];

    for (let i = 1; i < strNum.length; i++) {
        const curr = parseInt(strNum[i]);
        const prev = parseInt(strNum[i - 1]);

        if (curr % 2 === 0 && prev % 2 === 0) {
            res += "-" + strNum[i];
        } else {
            res += strNum[i];
        }
    }
    return res;
}
console.log(insertDashes("12344566"))

//Lab2
//Asc Sort Array
let array = [1, 2, 3, -4, -5, 6];
const ascSort = (array) => array.sort((a, b) => a - b);
console.log(ascSort(array)); //[ -5, -4, 1, 2, 3, 6 ]
//Sum Array
const sumArray = (array) => array.reduce((total, num) => total + num);
console.log(sumArray(array)) //3
//Remove Duplicates
const filterDuplicates = (array) => array.filter((num, index, self) => self.indexOf(num) === index);
console.log(filterDuplicates([1, 2, 3, 4, 4, 5, 5]));

//Lab3
//Order By Title
let library = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}];

const orderLibraryByTitle = (array) => array.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
})
console.log(orderLibraryByTitle(library))
//Filter Cities Greater Than Given Value
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

const filterCitiesByPopulation = (array, num) => array.filter((c) => c.population > num);
console.log(filterCitiesByPopulation(cities, 3000000))

//Filter Cities Greater Than Given Value And Desc Sort
const filterCitiesByPopulationAndDescSort = (array, num) => {
    return array
        .filter((c) => c.population > num)
        .sort((a, b) => b.population - a.population);
}
console.log(filterCitiesByPopulationAndDescSort(cities, 3000000))