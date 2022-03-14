const upForm = document.querySelector('#form');
const submit = document.querySelector('.submit-btn');
const bTitle = document.getElementById('bookTitle');
const bAuthor = document.getElementById('bAuthor');

const data = {}

upForm.addEventListener('change', (e) => {
    data[e.target.name] = e.target.value;    
    const string = JSON.stringify(data);
    localStorage.setItem('info', string);
})

let newData = [];
let reload = [];

submit.addEventListener('click', (e) => {
    if(bTitle.value == "" || bAuthor.value == ""){
        return null;
    } else {
        if(localStorage.length !== 0) {
            e.preventDefault();
            const infoBook = JSON.parse(localStorage.getItem('info'));
            newData.push(infoBook);
            const newLocal = JSON.stringify(newData);
            localStorage.setItem('recent', newLocal);
            const reloadBook = JSON.parse(localStorage.getItem('recent'));
        }
        reload.push(reloadBook);
        newData.forEach(value => {
            if(newData[newData.length-1] == value){
                author(value);  
            }
        }); 
    }
})

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

window.addEventListener('load', () => {
    reload.forEach(value => {
        if(reload[reload.length-1] == value){
            author(value);  
        }
    })
})





    
    
    
    
    
    
    

    
    
    
    

    
    
//});

// const string = JSON.stringify(data);
// localStorage.setItem('info', string);
// const infoBook = JSON.parse(localStorage.getItem('info'));

// if (localStorage.length !== 0){
    // const infoBook = JSON.parse(localStorage.getItem('info'));
    // function newBook () {
        // const divOne = document.createElement('div');
        // divOne.textContent = infoBook.book;
        // newFile.appendChild(divOne);
    // }
    
// }


// newBook();
    
    
    
    
    
// }

// upForm.insertAdjacentHTML("beforebegin" `
// <div class='bTitle'></div>
// <div class='bAuthor'></div>
// <button class='button'>Remove</button>
// `)
// 

