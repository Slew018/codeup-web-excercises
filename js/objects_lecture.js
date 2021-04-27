/** Mini Exercises */
/*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
      isOpen, ranking, yearOpened), as
      well as, information about at least 5 different animals (think nested objects). For each
      Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
       livingPlace). Each animal must also contain a method that returns the sound of that
        animal using the THIS keyword.
       hint: Each animal should have at least 5 properties (one of them being animalSound);
*/

"use strict";

let zoo = [
    {
        name: 'Ilvermorny',
        city: 'Mount Greylock, MA',
        isOpen: 'Year round',
        ranking: '2nd only to Hogwarts',
        yearOpened: '1627, 637 years after Hogwarts'
        animals: {
            type: 'Hippogriff',
            behavior: 'aggressive',
            transport: 'can be used as a mode of transportation',
        }
    },
    {
        animals: {
            type: 'Basilisk',
            behavior: 'aggressive',
            transport: 'Not recommended as a mode of transportation',
        }
    },
    {
        animals: {
            type: 'Thestral',
            behavior: 'passive',
            transport: 'Can be used as a mode of transportation'
        }
    },
    {
        animals: {
            type: 'Cerberus',
            behavior: 'Aggressive',
            transport: 'Not recommended as a mode of transportation'
        }
    },
    {
        animals: {
            type: 'Runespoor',
            behavior: 'Aggressive',
            transport: 'Not recommended as a mode of transportation'
        }
    }
    ];




console.log(typeof zoo);