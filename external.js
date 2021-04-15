"use strict";

alert("Welcome to my website");

var userInput = prompt("What is your favorite color?");
if (userInput.toLowerCase() === "green"){
    alert("Oh, that's my favorite color too!");
}else{
    alert("You Chose: " + userInput);
}