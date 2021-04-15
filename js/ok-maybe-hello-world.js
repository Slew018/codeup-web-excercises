"use strict";

// alert("I swear I won't make you see 'hello world'");
//
// alert("I hope my dogs don't get out again :/");

// MINI EXERCISE
// TODO: I demand a haiku! Using alert, write a haiku!
//     -> The entire poem consists of just three lines, with 17 syllables in total.
alert ("Write, erase, rewrite");
alert ("Erase and rewrite again");
alert ("A program begins:");

var userChoice = confirm("Would you like to continue?");

if(userChoice){
    console.log("Let's continue")
}else{
    console.log("Alright, be like that...")
}
console.log("The user chose: " + userChoice);

//PROMPT

var userInput = prompt(message: "What is your favorite movie?");
if (userInput ==== "Layer Cake".toUpperCase()){
    alert("Oh, hi Mark.");
}else{
    alert("You Chose: " + userInput);
}
alert(userInput);