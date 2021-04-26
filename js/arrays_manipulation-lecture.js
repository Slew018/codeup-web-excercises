(function(){
    "use strict";

    //TODO:
    // -> .length IMPORTANT
    // -> .forEach()
    // -> FOR LOOP

    // var days = ['Monday', 'Tuesday', 'Wednesday'];
    // days.push('Thursday');
    //
    // var removedElement = days.pop();
    //
    // console.log(days);
    // console.log('The removed element was: ' + removedElement);


    // console.log(days.length);
    // var newLength = days.push('Thursday');
    // console.log(newLength);

    //TODO: MINI-EXERCISE
    // -> Create an array with the remaining days of the week
    // -> Call .forEach() on that NEW array
    // -> Inside the inline function you pass into .forEach()
    //  -> add the remainingDay of the week to the old array
    //  -> When the loop completes, console.log() the completed day of the Week

    var days = ['Monday', 'Tuesday', 'Wednesday'];
    var missingDays = ['Thursday', 'Friday', 'Saturday', 'Sunday'];

    missingDays.forEach(function(day){
        days.push(day);
    });
        console.log(days);


    // var numArray = [1, 2, 3, 4, 5,];
    //
    // console.log(numArray.indexOf(1));
    //
    // numArray.unshift();
    //
    // console.log(numArray);
    //
    // numArray.sort();


    // TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array


    // var days = ['Monday', 'Tuesday', 'Wednesday'];
    // days.push('Thursday');
    //
    // var removedElement = days.pop();
    //
    // console.log(days);
    // console.log('The removed element was: ' + removedElement);
    //
    //
    // console.log(days.length);
    // var newLength = days.push('Thursday');
    // console.log(newLength);
    //
    // console.log(`Current Days Array: ${days}`);
    //     let reverse = (daysOfTheWeek)


    function giveMissyJustice(notASuspectString){

        var musicalGenius = notASuspectString.split('');

        console.log(musicalGenius);

        giveMissyJustice('I put my string down, flip it and reverse it');


    }

})();