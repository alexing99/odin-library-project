let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  makeList();
}

const gbg = new Book("The Glass Bead Game", "Herman Hesse", "558", true);
const agd = new Book("Against The Day", "Thomas Pynchon", "1055", true);
const tim = new Book(
  "The Invention of Morel",
  "Adolfo Bioy Casares",
  "103",
  true
);
myLibrary.push(gbg);
myLibrary.push(agd);
myLibrary.push(tim);

makeList();

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  makeList();
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  addBookToLibrary();
}

function closeForm2() {
  document.getElementById("myForm").style.display = "none";
}

function delBook(index) {
  myLibrary.splice(index, 1);
  makeList();
  console.log(d);
}

function makeList() {
  let shelfBook = document.querySelector("#shelf");
  shelfBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let spine = document.createElement("div");
    spine.innerHTML = `<p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages + " pages"}</p>
            <div><button class="toggle" onclick="toggleRead(${i})">${
      book.read ? "Read" : "Not Read Yet"
    }</p>
            <button class="remove-btn" onclick="delBook(${i})">Remove</button></div>`;
    spine.className = "spine-div";
    shelfBook.appendChild(spine);
  }
}
