// //Random number generator

// var n = Math.random(); //generates a 16 decimal place number. Never reachs 1.0 but can be 0.

// //if simulating a dice roll (six sides)

// n = n * 6;

// n = Math.floor(n) + 1;

// console.log(n);

//Love Calculator

// prompt("Name #1");
// prompt("Name #2");

// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// alert("Your love score is " + loveScore + "%");

//Control flow

// prompt("Name #1");
// prompt("Name #2");

// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;

// if (loveScore > 70) {
//     alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
// } else {
//     alert("Your love score is " + loveScore + "%");
// }

//comparators and equality

// prompt("Name #1");
// prompt("Name #2");

// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;

// if (loveScore > 70) {
//     alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
// } else {
//     alert("Your love score is " + loveScore + "%");
// }

//comnbining comparators

// prompt("Name #1");
// prompt("Name #2");

// var loveScore = Math.random() * 100;
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

// var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// var guestName = prompt("What is your name?");

// if (guestList.includes(guestName)) {
//     alert("Welcome!");
//     } else {
//         alert("Access denied!");
//     }

//FizzBuzz
//.push pushed () into the end of an array.
//.pop removes last item from an array.

// var output = [];
// var count = 1;

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
//     var numberOfGuests = names.length;
//     var randomGuestPosition = Math.floor(Math.random() * numberOfGuests);
//     var randomGuest = names[randomGuestPosition];
//     return (randomGuest + " is going to buy lunch today!");
// }           
