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



