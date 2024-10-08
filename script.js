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
  this.deleteBook = function () {
    console.log("t");
    return;
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

// Book.prototype.deleteBook = function () {
//   this.style.backgroundColor = "none";
// };

addBookButton.addEventListener("click", () => {
  addBookToLibrary();
  bookshelf.innerHTML = "";
  let ticker = -1;
  for (let item of myLibrary) {
    ticker++;
    let book = document.createElement("div");
    book.classList.add("book");
    let title = document.createElement("p");
    title.innerText = `${item.title}`;
    let author = document.createElement("p");
    author.innerText = `${item.author}`;
    let length = document.createElement("p");
    length.innerText = `${item.length}`;
    let readStatus = document.createElement("p");
    readStatus.innerText = `${item.readStatus}`;
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    let bookPosition = document.createElement("p");
    bookPosition.innerText = ticker;
    bookPosition.style.display = "none";
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(length);
    book.appendChild(readStatus);
    book.appendChild(deleteButton);
    bookshelf.appendChild(book);
    console.log(myLibrary);
    deleteButton.addEventListener("click", () => {
      book.style.display = "none";
      bookshelf.removeChild(book);
      myLibrary.splice(bookPosition.innerText, 1);
      console.log(ticker);
      console.log(bookPosition);
      console.log(myLibrary);
    });
    console.log(book.classList);
  }
});
