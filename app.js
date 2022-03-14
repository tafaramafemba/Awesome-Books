const upForm = document.querySelector('#form');
const submit = document.querySelector('.submit-btn');
const bTitle = document.getElementById('bookTitle');
const bAuthor = document.getElementById('bAuthor');

function author (array){
    const newFile = document.querySelector('.bookDetails');
    const divOne = document.createElement('div');
    divOne.textContent = array.book;
    newFile.appendChild(divOne);
    const divTwo = document.createElement('div');
    divTwo.textContent = array.author;
    newFile.appendChild(divTwo);
    const gone = document.createElement('button');
    gone.classList.add('gone');
    gone.textContent = 'Remove';
    newFile.appendChild(gone);
    const separate = document.createElement('hr');
    newFile.appendChild(separate);
}

const data = {}

upForm.addEventListener('change', (e) => {
    data[e.target.name] = e.target.value;    
    const string = JSON.stringify(data);
    localStorage.setItem('info', string);
})

let newData = [];

submit.addEventListener('click', (e) => {
    if(bTitle.value == "" || bAuthor.value == ""){
        return null;
    } else {
        e.preventDefault();
        const infoBook = JSON.parse(localStorage.getItem('info'));
        newData.push(infoBook);
        const reload = JSON.stringify(newData);
        localStorage.setItem('refresh', reload);
        newData.forEach(value => {
            if(newData[newData.length-1] == value){
                author(value);  
            }
        })
    }
})

window.addEventListener('load', () => {
    if(localStorage.refresh != undefined) {
        let charge = JSON.parse(localStorage.getItem('refresh'));
        charge.forEach(value => {
            author(value);
        })
    }
})

const removeArea = document.getElementsByClassName('gone');






































// 







