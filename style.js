/**
 * I am learning javascript from the scracth again these are thr topics 
 */

// Lesson number 7 Javascript and their data types
let num = 5;
let newNum = 6;
let myName = "Bibek";
let lastName;

console.log( newNum > num);
console.log(typeof num);
console.log(typeof myName);

console.log(myName == "Bibek");
console.log(typeof lastName);
  let myList = ["Bibek" , true, "Full stack"];
  console.log(myList);

//   here is function
  
  function hello() {
    console.log("Hello, my name is bibek hamal");
  }
 hello();
  
 const namaste = () => {
    console.log(" this is in nepalese");
 } 
 namaste();
 

//  objects

let person = {
    name: "Bibek Hamal",
    age: 26,
    gender: "sex"
}

console.log(person.age); /* we cn\an access the property pf an objects by just using the (.) dot operator.*/

// task

let favDrink = "fanta";
let favNum = 7;
let person1 = {
    name: "Bibek",
    age: 26,
}

function myFavs() {
    console.log(` My name is ${person1.name} and I am ${person1.age} years old. My favorite drink is ${favDrink} and my favorite number is ${favNum}`);
    
}
myFavs();
// const myFavs = () => {
//     console.log(` My name is ${person1.name} and I am ${person1.age} years old. My favorite drink is ${favDrink} and my favorite number is ${favNum}`);
// }
// myFavs();


// lesson number 8 js arithmetic coperators


console.log("************************")
 console.log("Lesson number 8 Javascript arithmetic operators");

console.log(5 + 5);
console.log(5 - 2);
console.log(5 * 3);
console.log(15 /5 );


console.log(5 % 2);
console.log(5 ** 3); /* 5 to the power of 3. that means the output will be 125*/


let num1 = 10;
let num2 = 20;

console.log(num1 + num2);
console.log(num1%num2);

let total= 10;
console.log(++total);
console.log(total);


// lesson number 9 js assignment operator

let score = 100;
// score = score + 100;
score += 100;  /** += operator */
score -= 100;  /** -= operator */
score *= 100;  /** *= operator */
score %= 100;  /** %= operator */
console.log(score);


let xp=250;
xp *= 2;
console.log(xp);

// lesson 10 js numbers

// let num10 = 3;
// let newNum10 = 3.1

// console.log(typeof num10);
// console.log(typeof newNum10);


let num10 = 1e5; // we need to use power of e while declaring the number with high values
console.log(num10);
console.log(typeof num10);
let newNum10 = 1.5;
console.log(newNum10);

// LESSON 12 js strings

let book = "The Harry potter"; // double quotes
let author = 'Bibek Hamal'; //single quote
let series = `Hello harry`; // back ticks

let coneversation = `Bibek asked: 'Who are you?'`;
// console.log(coneversation);
let diaglogue = "Bibek said: \"Please don\'t do that\"";

// lesson 13 js concatenate

let day = "Good Morninig";
let night = "Good night";
let question = "How are you?";

let greetingDay = day + night ;
console.log(greetingDay);


let myName1 = "Bibek Hamal";
let wish = "How are you";

let welcome = ( "Hy, my name is " + myName1 + '. ' + wish);
console.log(welcome);

let l = "I am learning ";
let k = "Javascript "

let m = l + k;
console.log(m);

let n = l.concat(k) //using the concat . operator and remember you have to use paranethesis as well
console.log(n);

// lesson 14 template literals

let title = `Man of steel`;
let year = 2014;
let platform = 'DC';

let info = title + " was released by " + platform + " in " + year;
console.log(info);

let info1 = `${title} was released by ${platform} in ${year}`;
console.log(info1);

/** inside the template lieterals you have to use embeded expression : ${} and inside the embeded expression you can insert any valid js expression */


// lesson 15 string methods

let course = "    Javascript is not cool    ";
console.log(course.length); //returns the length of the varianle
console.log(course.trim()); // trims the whitespaces and spaces
console.log(course.toUpperCase()); // changes into upper case
console.log(course.toLowerCase()); // changes into lower case
console.log(course.indexOf("s"));  // returns the index of given string character
console.log(course.lastIndexOf("a")); // returns the last index of string character
console.log(course.slice(0,15)); // slices and returns the value from given specified index
console.log(course.replace("not", "so")); // replaces the character with
console.log(course.charAt(10)); // returns the string at passed index

let x = "I am watching Dev Dreamer."

console.log(x.toUpperCase());
console.log(x.slice(14));


// lesson 16 JS date object
let currentDate = new Date();
console.log(currentDate.getFullYear());

let milliseconds = new Date(1999,7,11,5,6);
// console.log(milliseconds);
// console.log(currentDate.getMonth());

console.log(currentDate.toLocaleString('default', {
  month: 'long',
  weekday: 'short' 
})); // this returns the name of the month instead id value

// lesson 17 JS math methods

let min = Math.min(1,2,3,4,5);
console.log(min);

let num4 = Math.random().toFixed(1) * 10;
console.log(num4);

let num5 = Math.random().toFixed(1) * 10;
console.log(num5);

let max = Math.max(num4, num5);
console.log(max);


// Lessonn 18 JS comaprison operators

let a = 10
let b = 15
console.log( a > b);

console.log(a == "10");
console.log(a === "10");

let x1 = "5";
let y1 = 6;

console.log( x1 !== y1);

// lesson 19 JS logical operatos
 
let x11= 0;
let y11 = 1;

if(x11) {
  console.log("Hello");
} 
/** FALSEY value 
 * 1. False
 * 2.undefined
 * 3.null
 * 4.Empty String ("")
 * 5.NaN
 * 6. 0
 * 7. -0 (negative zero) */

 // real example of conditional checls
let username = '';
let userID;

if (username || userID) {
  console.log(`Welcome ${username}`);
  
} else {
  console.log(`Please enter you name and ID`);
  
}


// lesson 20 JS nullish Coalescing operator
// ?? is the nullish operator it is simlar to OR operator but difference is OR operator looks for truthy value nullish operator looks for defined value
let score1 = 0;

console.log(score || "no score"); // output will be no score because 0 is a falsey value so

console.log(score ?? "no score "); // will return 0 because even though it is false, it is defined


let course1;
console.log(course1 ?? "Please select a course");
