const myLibrary = [];

class Book {
  constructor(title, author, genre) {
    this.ID = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isRead = false;
  }

  getInfo() {
    return `${this.title} by ${this.author}, published in the ${this.genre} category.`;
  }
}

const dialogButton = document.getElementById("openDialogButton");
const closeButton = document.getElementById("closeDialogButton");
const form = document.getElementById("addBookForm");
const addBookButton = document.getElementById("addBookButton");
const displayShelf = document.querySelector(".display-shelf");
const dialog = document.getElementById("addBookDialog");
const body = document.querySelector("body");

dialogButton.addEventListener("click", function () {
  dialog.showModal();
});

closeButton.addEventListener("click", function () {
  dialog.close();
});

body.addEventListener("click", function (event) {
  if (event.target === dialog) {
    dialog.close();
  }
});
// Find out how to close the dialog when clicking outside of it and avoid closing when clicking on the padding within the dialog

addBookButton.addEventListener("click", function (event) {
  event.preventDefault();
  addBook();
  updateLibrary();
  form.reset();
});

function addBook() {
  let bookTitle = document.getElementById("addBookTitle").value;
  let bookAuthor = document.getElementById("addBookAuthor").value;
  let bookGenre = document.getElementById("addBookGenre").value;
  let newBook = new Book(bookTitle, bookAuthor, bookGenre);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function updateLibrary() {
  displayShelf.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const titleCard = document.createElement("div");
    titleCard.setAttribute("id", book.ID);
    titleCard.classList.add("title-card");
    titleCard.innerText = `${book.title}`;
    displayShelf.appendChild(titleCard);
    const authorCard = document.createElement("div");
    authorCard.classList.add("author-card");
    authorCard.innerText = `${book.author}`;
    titleCard.appendChild(authorCard);
    const genreCard = document.createElement("div");
    genreCard.classList.add("genre-card");
    genreCard.innerText = `${book.genre}`;
    titleCard.appendChild(genreCard);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    titleCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      myLibrary.splice(i, 1);
      updateLibrary();
      console.log(myLibrary);
    });
  }
  dialog.close();
}
