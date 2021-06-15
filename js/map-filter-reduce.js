const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const userWithLanguages = users.filter(function () {
    return users.languages.length >= 3;
});

console.log(userWithLanguages);

//Use .map to create an array of strings where each element is a user's email address
const emails = users.map(e => e.email);

console.log(emails);


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// const yearsOfExp = users.reduce => ((ac, cV) => ac + cV) / users.length;


// let productOfExp = e => e.reduce((a,b) => a + b, 0);
// let longestEmail = emails.reduce ((acc, cV){
//     return acc.length > cV.length
//     ? acc
//         : cV;
// })

let nameString = users.reduce((aC, cV, index) => {
    // if (index ==== users.length -1){
    //     return aC + cV.name;
    // }
    return aC + cV.name + ", ";
}, "");

// Use .reduce to get the unique list of languages from the list of users.

let uniqueLanguages = users.reduce((aC, user) => {
    // console.log(aC);
    let uniqueLang = user.languages.filter((lang) => {
        if (!aC.includes(lang)) {
            aC.push(lang)
        }
    })
    console.log(uniqueLang);
    aC.push(...uniqueLang);
    return aC;
}, []);