const myLibrary = [];
const addBookButton = document.querySelector(".addBookButton");
const bookshelf = document.querySelector(".bookshelf");

function Book(title, author, length, readStatus) {
  (this.title = title),
    (this.author = author),
    (this.length = length),
    (this.readStatus = readStatus);
  this.getInfo = function () {
    return this.author;
  };
}

function addBookToLibrary() {
  let title = prompt("title");
  let author = prompt("author");
  let length = Number(prompt("length"));
  let readStatus = prompt("readStatus");
  let bookToAdd = new Book(title, author, length, readStatus);
  myLibrary.push(bookToAdd);
}

addBookButton.addEventListener("click", () => {
  addBookToLibrary();
  bookshelf.innerHTML = "";
  for (let item of myLibrary) {
    let book = document.createElement("div");
    book.innerText = `${item.title}, by ${item.author}, ${item.length}, ${item.readStatus}`;
    bookshelf.appendChild(book);
  }
});
