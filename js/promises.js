// TODO: using fetch(), make a simple GET request to this api: “https://dog.ceo/api/breeds/image/random” and append this image to the image element with an id of “random-dog-image”


fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>
        response.json())
    .then(data => {
        console.log(data);
        console.log(data.message);
        $('#random-dog-image').attr('src', data.message)
    })
    .catch(error => {
        console.log(error);
        console.error(error);
    })


// create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts/11') // make a request - GET
    .then(response => response.json())
    .then(data => {
        console.log(data); //
        $('#post').html(`
        <h1>${data.title}</h1>
        <p>${data.body}</p>`)
    }) // we have the data in json format, now we can manipulate it
    .catch(error => {
        console.log(error);
        console.error(error);
    });
