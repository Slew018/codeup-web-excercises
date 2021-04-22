// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements
//
// var cars = 0; //Variable of vehicles to fill the parking lot
//
// do {// execute once and then again ONLY IF the condition in the while () is true
//     var parkingSpaces = 30 - cars // 30 // 30 -1 = 29
//     console.log(`We have ${parkingSpaces} parking spaces left`);
//     cars++; //1 //2
// }while(cars <= 30)
//
// console.log("NO ROOM FO YA VROOM VROOM");


var allCones = Math.floor(Math.random() * 50) + 50; //Generates random number between 50-100

do {// execute once and then again ONLY IF the condition in the while () is true
    var conesSold = Math.floor(Math.random() * 5) + 1; //Generates random amount of Cones Sold 1 through 5
    allCones = allCones - conesSold; //Taking the remainder of the amount of Cones started with and subtracting random Cones sold through one iteration
    console.log(`I only have to sell ${allCones} more cones!`); //Updating progress through one iteration

} while (allCones >= 1)

console.log("I can go home now!");

