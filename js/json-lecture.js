// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully
// TODO: what status do you get back when making a GET request to: https://jsonplaceholder.typicode.com/cmments


$.ajax("https://jsonplaceholder.typicode.com/comments", {
    type: "GET",
}).done(function (data, status) {
    console.log(data)
    console.log(status);
});

$.ajax("https://jsonplaceholder.typicode.com/posts", {
    type: "POST",
    data: {
        title: 'BNA',
        body: 'JFK',
        userId: '1'
    }
}).done(function (data) {
    console.log(data);
});


