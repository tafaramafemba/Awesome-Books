const upForm = document.querySelector('#form');
const bookTitle = document.getElementById('bookTitle');
const author = document.getElementById('author');
const submit = document.querySelector('.submit-btn');

let array = [];

submit.addEventListener('click', (e) => {
    e.preventDefault();
    array.push(bookTitle.value);
    array.push(author.value);
    console.log(array);
});

upForm.insertAdjacentHTML("beforebegin" `
<div class='bTitle'></div>
<div class='bAuthor'></div>
<button class='button'>Remove</button>
`)

















