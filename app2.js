const booksSection = document.querySelector('.books');

class Awesome {
  constructor() {
    this.books = [];
    this.newBooks = [];
  }

  add(data) {
    const temp = [];
    temp.push(data);
    this.books = temp;
  }

  addBook(data) {
    const temp = [];
    temp.push(data);
    this.newBooks = temp;
  }

  delete(number) {
    this.books.splice(number, 1);
    window.localStorage.setItem('bookArray', JSON.stringify(this.books));
    for (let k = 0; k < this.books.length; k += 1) {
      window.localStorage.setItem(k.toString(), JSON.stringify(this.books[k]));
    }
    window.location.reload();
  }

  displayObject(number) {
    return ` 
    <div class="container"> 
      <div class="title">${this.books[number].title}</div>
      <div class="by">by</div>
      <div class="author">${this.books[number].author}</div>
      <button type="button" class="remove">Remove</button>
    </div>
    `;
  }
}

const awesome = new Awesome();

awesome.add({ title: 'Chronicles of Narnia', author: 'C.S Lewis' });

if (window.localStorage.getItem('bookArray') !== null) {
  const array = JSON.parse(window.localStorage.getItem('bookArray'));
  for (let m = 0; m < array.length; m += 1) {
    awesome.newBooks[m] = JSON.parse(window.localStorage.getItem(m.toString()));
  }
  awesome.books = awesome.newBooks;
}

for (let i = 0; i < awesome.books.length; i += 1) {
  const newElement = document.createElement('section');
  newElement.innerHTML = awesome.displayObject(i);
  booksSection.appendChild(newElement);
}

for (let j = 0; j < awesome.books.length; j += 1) {
  const removeButton = document.querySelectorAll('.remove');
  removeButton[j].addEventListener('click', () => { awesome.delete(j); });
}

const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const add = document.getElementById('add');
const newBook = {
  title: '',
  author: '',
};

add.addEventListener('click', () => {
  newBook.title = newTitle.value;
  newBook.author = newAuthor.value;

  awesome.books[awesome.books.length] = newBook;

  window.localStorage.setItem('bookArray', JSON.stringify(awesome.books));
  for (let k = 0; k < awesome.books.length; k += 1) {
    window.localStorage.setItem(k.toString(), JSON.stringify(awesome.books[k]));
  }
});

window.localStorage.clear();

window.localStorage.setItem('bookArray', JSON.stringify(awesome.books));
for (let k = 0; k < awesome.books.length; k += 1) {
  window.localStorage.setItem(k.toString(), JSON.stringify(awesome.books[k]));
}


  const date = document.querySelector('.date')
  let today = new Date();
  date.textContent = today;


