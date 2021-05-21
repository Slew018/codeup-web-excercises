
addButtonEvent();

function addButtonEvent() {
    document.getElementById("submitBtn")
            .addEventListener("click", addPost)
}


function addPost() {
    let textField = document.getElementById('blog-container')
    let newText = document.createElement('p');
        // newText.setAttribute('class = border border-info')
    let location = document.getElementById('user-input');

    textField.appendChild(newText);
    newText.innerText = location.value

    location.value = '';

}