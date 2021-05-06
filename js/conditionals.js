"use strict";

function analyzeColor(color){
    if (color === 'blue'){
        return 'blue is the color of the sky';
    } else if (color === 'red'){
        return 'Strawberries are red';
    } else {
        return 'I don\'t know anything about that color';
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(analyzeColor(randomColor));
console.log("The random color is " + randomColor);

function analyzeColorSwitch(color) {
    switch (color) {
        case 'blue':
            return "blue is the color of the sky";
        case "red":
            return "Strawberries are red";
        default:
            return "I don't know anything about " + color;
    }
}

console.log(analyzeColorSwitch("orange"));

function calculateTotal(lucky, total){
    switch(lucky) {
        case 1:
            alert("Your number is 1!");
            alert("Price before discount is: " + total);
            alert("Price after discount is: " + (.01 * total));
            break;
        case 2:
            alert("Your number is 2!");
            alert("Price before discount is: " + total);
            alert("Price after discount is: " + (.25 * total));
            break;
        case 3:
            alert("Your number is 3!");
            alert("Price before discount is: " + total);
            alert("Price after discount is: " + (.35 * total));
            break;
        case 4:
            alert("Your number is 4!");
            alert("Price before discount is: " + total);
            alert("Price after discount is: " + (.5 * total));
            break;
        case 5:
            alert("Your number is 5!");
            alert("Price before discount is: " + total);
            alert("Price after discount is: " + (1 * total));
            break;
    }
}


