const myLibrary = [];
const addBookButton = document.querySelector(".addBookButton");
const bookshelf = document.querySelector(".bookshelf");

function Book(title, author, length, readStatus) {
  (this.title = title),
    (this.author = author),
    (this.length = length),
    (this.readStatus = readStatus);
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
    deleteButton.addEventListener("click", () => {
      book.style.display = "none";
      bookshelf.removeChild(book);
      myLibrary.splice(bookPosition.innerText, 1);
    });
  }
});

const dialog = document.querySelector("#book-dialog");
const showDialog = document.querySelector("#show-dialog");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const lengthInput = document.querySelector("#length");
const readStatusInput = document.querySelector("#readStatus");
const confirmBtn = document.querySelector("#confirmBtn");
showDialog.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", (e) => {
  bookshelf.value =
    dialog.returnValue === "default"
      ? "No return value."
      : `Return Value ${dialog.returnValue}.`;
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close(
    `${titleInput.value}, ${authorInput.value},${lengthInput.value}, ${readStatusInput.value}`
  );
});
