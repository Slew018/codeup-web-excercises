// "use strict";
//
// function trim(input){
//     return input.replaceAll(' ', '');
//
// }
//
// console.log(trim('This is no time to be a hero, you go first'));


// const last = function(input){
//     return input.split('').pop();
// }
//
// console.log(last('words'));

const dot = function(){
    let dotPattern = "*"
    let patternAdd = '* \n'
    for (let i = 1; i <=5; i++){
        dotPattern += '* ';
        patternAdd += dotPattern + '\n';
    }
    return dotPattern;
}
console.log(dot());