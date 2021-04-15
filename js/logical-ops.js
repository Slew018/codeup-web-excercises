"use strict";

var hasFur= true;
var hasWhiskers = true;
var nameisCoda = true;

var isMyDog;

if (hasFur){
    isMyDog = true;
}

if (hasWhiskers){
    isMyDog = true;
}

// Logical OR (||)

var creditScore = 720;
var cashOnHand = 5000;

if (creditScore > 680 || cashOnHand > 3000){
    console.log("Congrats! You (the bank) now own a car!");
}

var hasRequiredScoreOrCash = (creditScore > 680)  || (cashOnHand > 3000);

var lengthOfEmployment = 6;

var hasAdequateLengthOfEmployment = (lengthOfEmployment >= 6);
var purchasedCar;

if (hasRequiredScoreOrCash && hasAdequateLengthOfEmployment){
    console.log("Ok, for real. You get a car");
    purchasedCar = true;
}

if (hasRequiredScoreOrCash){
}

// Logical NOT (!)

//console.log("The inverted value is: " + !true);

console.log("This is the weird stuff I was telling you about: " + !NaN);