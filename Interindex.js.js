// //Random number generator

// let n = Math.random(); //generates a 16 decimal place number. Never reachs 1.0 but can be 0.

// //if simulating a dice roll (six sides)

// n = n * 6;

// n = Math.floor(n) + 1;

// console.log(n);

//Love Calculator

// prompt("Name #1");
// prompt("Name #2");

// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// alert("Your love score is " + loveScore + "%");

//Control flow

// prompt("Name #1");
// prompt("Name #2");

// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;

// if (loveScore > 70) {
//     alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
// } else {
//     alert("Your love score is " + loveScore + "%");
// }

//comparators and equality

// prompt("Name #1");
// prompt("Name #2");

// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;

// if (loveScore > 70) {
//     alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
// } else {
//     alert("Your love score is " + loveScore + "%");
// }

//comnbining comparators

// prompt("Name #1");
// prompt("Name #2");

// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;

// if (loveScore > 70) {
//     alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kany!.");
// } 

// if (loveScore > 30 && loveScore <= 70) {
//     alert("Your love score is " + loveScore + "%");
// }
    
// if (loveScore <= 30) {
//     alert("Your love score is " + loveScore + "%" + " You go together like oil and water.");
// }

//Leap year checker

// function isLeap(year) {

// if (year % 4 === 0 && year % 100 !== 0) {
//     return "Leap year."
//     }
// else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
//     return "Leap year."
// }
// else {
//     return "Not leap year."
// }
// }

// isLeap(2004)

//Arrays

//Guest list

// let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// let guestName = prompt("What is your name?");

// if (guestList.includes(guestName)) {
//     alert("Welcome!");
//     } else {
//         alert("Access denied!");
//     }

//FizzBuzz
//.push pushed () into the end of an array.
//.pop removes last item from an array.

// let output = [];
// let count = 1;

// function fizzBuzz() {

// if (count % 3 === 0 && count % 5 === 0) {
//         output.push("FizzBuzz")
//     }
// else if (count % 3 === 0) {
//         output.push("Fizz")
//     }
// else if (count % 5 === 0) {
//         output.push("Buzz")
//     }
// else {
//     output.push(count)
//     }
    
// count++;  
    
//     console.log(output);
// }

//Who's buying lunch random selector

// function whosPaying(names) {
//     let numberOfGuests = names.length;
//     let randomGuestPosition = Math.floor(Math.random() * numberOfGuests);
//     let randomGuest = names[randomGuestPosition];
//     return (randomGuest + " is going to buy lunch today!");
// }           

//While loops

// let i = 1;

// while(i<2) {
//     console.log(i);
//     i++;
// }

//FizzBuzz with while loop

// let output = [];
// let count = 1;

// function fizzBuzz() {

//     while(count <= 100) {
    
//         if (count % 3 === 0 && count % 5 === 0) {
//         output.push("FizzBuzz")
//     }
//         else if (count % 3 === 0) {
//         output.push("Fizz")
//     }
//         else if (count % 5 === 0) {
//         output.push("Buzz")
//     }
//         else {
//             output.push(count)
//     }
    
// count++;
// }
    
//     console.log(output);
// }

//99 bottles of beer

// function beer() {
//     let bottlesOfBeer = 99;
//     while (bottlesOfBeer >= 0) {
        
//         if (bottlesOfBeer > 1) {
//         console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer.");
//         bottlesOfBeer--;
//         console.log("Take one down and pass it around," + bottlesOfBeer + " bottles of beer on the wall.");
//         }
//         else if (bottlesOfBeer == 1) {
//         console.log(bottlesOfBeer + " bottle of beer on the wall, " + bottlesOfBeer + " bottle of beer.");
//         bottlesOfBeer--;
//         console.log("Take one down and pass it around," + bottlesOfBeer + " bottles of beer on the wall.");
//         }
//         else if (bottlesOfBeer == 0) {
//         console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
//         }
//     }
// }
// 
// For loops
// 
// for(let i = 1; i < 2; i++){
//     console.log(i);
// }
// 
// FizzBuuz with For loop
// let output = [];

// function fizzBuzz() {

//     for(let count = 1; count < 101; count++) {
//     if (count % 3 === 0 && count % 5 === 0) {
//             output.push("FizzBuzz");
//         } else if (count % 3 === 0) {
//             output.push("Fizz");
//         } else if (count % 5 === 0) {
//         output.push("Buzz");
//         } else {
//             output.push(count);
//         }
//     }    
//     console.log(output);
// }
// 
// While Loops for a "state" ie something is true or false like while player one is alive
// For Loops for iterating

// Fibonacci Generator

// function fibonacciGenerator(n){
//     let fiboArray = [];
    
//     if (n === 1) {
//         fiboArray.push(n - 1);
//     } else if (n === 2) {
//         fiboArray.push(n - 2, n - 1);
//     } else {
//         fiboArray = [0, 1];
//         for (let i = 2; i < n; i++) {
//             fiboArray.push(fiboArray[i - 1] + fiboArray[i - 2]);
//         }
//     } console.log(fiboArray);
// }