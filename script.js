// "use strict";
// let age=25;
// console.log("My age is: " + age);
// age += 5;
// console.log("In 5 years, my age will be: " + age);
// const college = "XYZ University";
// console.log("I am studying at: " + college);
// // college = "ABC College";
// console.log("I have transferred to: " + college);
// var city = "New York";
// console.log("I live in: " + city);
// var city = "Los Angeles";
// console.log("I have moved to: " + city);
// let country = "USA";
// let country = "Canada"; // This will cause an error because 'country' is already declared
// let studentName = "Sriram";
// let age = 25;
// let mark = 95;
// let fees = 25000.50;

// console.log(typeof studentName);
// console.log(typeof age);
// console.log(typeof mark);
// console.log(typeof fees);
// let isStudent = null;
// console.log(isStudent); // Output: null
// let name="John Doe";
// console.log(`Name: ${name}`); // Output: Name: John Doe
// console.log(10!="10"); // Output: true
// console.log(10!=="10"); // Output: true
// console.log(10===10); // Output: true
// console.log(parseInt("45.99"));
// console.log(parseFloat("45.99"));
// console.log(Number("45.99"));
// console.log(parseInt("100abc1"));
// console.log(Number("100abc"));
// if ("Hello") {
//     console.log("Hello exists");
// }

// if (100) {
//     console.log("Number exists");
// }

// if ([]) {
//     console.log("Array exists");
// }

// if ({}) {
//     console.log("Object exists");
// }
// let username = "";

// if (username) {
//     console.log("Welcome, " + username);
// } else {
//     console.log("Please enter your name");
// }
// console.log(Boolean(0));
// console.log(Boolean("0"));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean([]));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// let day = 6;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     default:
//         console.log("Invalid day");
// }
// Output: Hello, Alice!
// function greet() {
//     console.log("Hello");
// }
// const greetUser = function(name) {
//     console.log(`Hello, ${name}!`);
// }
// greetUser("Alice");
// let x = 10;

// function outer() {
//     let y = 20;

//     function inner() {
//         let z = 30;
//         console.log(x + y + z);
//     }

//     inner();
//     console.log(z);
// }

// outer();
// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();

// counter();
// counter();
// counter();
// let numbers = [1, [2, [3, [4]]]];

// console.log(numbers.flat(10));
// let result = Array.from({ length: 5 }, (_, index) => index + 1);

// console.log(result);
let marks = [85, 11190, 75];

console.log(marks.toString());
console.log(marks.toLocaleString());