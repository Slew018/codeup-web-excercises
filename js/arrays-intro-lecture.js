(function(){
    "use strict";

// TODO: Make a new array which holds elements based on your own characteristics
//  -> In a console.log, output a string which describes yourself based on those elements
//  -> KEEP IN MIND ZERO-INDEXING!

    //
    // var profile = ["Sean", "36", "Veteran"];
    // console.log(profile);

    // var myPets = ["Sputnik", "Apollo", "Mir", "Artemis"];
    //
    // for (let i = 0; i < myPets.length; i++){
    //     console.log(myPets[i]);
    // }

    // TODO: MINI-EXERCISE
//  -> Create an array with at least 5 elements, describing whatever you'd like!
//  -> Create a loop which will log each element to the console
//  -> Wrap that loop in a function which has an array parameter
//  -> Call the function and pass in your array as the argument
//  -> DID YOU KNOW: You can add different data types to an array??
//      -> Try adding strings, numbers, or booleans as elements

    var spaceX = ["Sputnik", "Apollo", "Mir", "Artemis", "Endeavour"];

    // for (let i = 0; i < spaceX.length; i++){
    //     console.log(spaceX);

        spaceX.forEach(function(space) {
            console.log("Previous space missions are: " + space);
        })




})()