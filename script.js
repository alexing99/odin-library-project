let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const gbg = new Book("The Glass Bead Game", "Herman Hesse", "558", true)
myLibrary.push(gbg);



function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary)
    makeList();
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    addBookToLibrary();
}

function makeList() {
    let shelfBook = document.querySelector("#shelf")
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        let spine = document.createElement("div")
        spine.innerHTML = `<p>${book.title}<p><p>${book.author}<p><p>${book.pages}<p><p>${book.read}<p>`
        shelfBook.appendChild(spine);
    }
}