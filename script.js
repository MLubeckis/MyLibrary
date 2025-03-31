const myLibrary = [];

function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ${read == true ? 'already read' : 'not read yet'}`;
    }
}


function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)

    myLibrary.push(newBook);
}


document.querySelector("#new-book-form input[type=button]").addEventListener("click", ()=>{
    const form = document.querySelector("form");
    const title = form.title.value
    const author = form.author.value
    const pages = form.pages.value
    const read = form.read.value == 'true' ? true : false;
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    displayBooks()
    closeModal();
})

document.querySelector("#openModal").addEventListener("click", openModal);

//#region AddStaticBooks
addBookToLibrary("ONYX STORM", "Rebecca Yarros", 544, false);
addBookToLibrary("Harlow Nigh", "Pamela Lustinsky", 356, false);
addBookToLibrary("Magic Weekend", "Rebecca Chihuahua", 421, true);
addBookToLibrary("Only You?", "Kathy McSister", 851, false);
addBookToLibrary("Stormbringer", "Josh Philip Yarros", 125, false);
addBookToLibrary("WatchME", "Rebe Narros", 1325, true);
//#endregion

function displayBooks() {
    const booksContent = document.querySelector("#books");
    booksContent.innerHTML = '';
    const booksTable = document.createElement("table");
    booksTable.classList.add("minimalistBlack");
    booksTable.innerHTML = "<tr><th>Nosaukums</th><th>Autors</th><th>Lappuses</th><th>Izlasita</th></tr>"
    for (const book of myLibrary) {
        const newRow = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPages = document.createElement("td");
        const tdRead = document.createElement("td");

        tdTitle.textContent = book.title;
        tdAuthor.textContent = book.author;
        tdPages.textContent = book.pages;
        tdRead.textContent = book.read == true ? "Ja" : "Ne";

        newRow.appendChild(tdTitle);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPages);
        newRow.appendChild(tdRead);
        booksTable.appendChild(newRow);
        }
        booksContent.appendChild(booksTable);
        
}

function openModal(){
    document.querySelector("#new-book-modal").style.display = 'flex';
}

function closeModal(){
    document.querySelector("#new-book-modal").style.display = '';
    document.querySelector("form").reset();
}

displayBooks();











// function Read(read) {
//     this.read = read;
// }

// Object.setPrototypeOf(Book.prototype, Read.prototype);
// Object.getPrototypeOf(Book.prototype);

// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', true);
// const book2 = new Book('The Hobbit 2', 'J.R.R. Tolkien', '365', false);

// Book.prototype.whatBook = function() {
//     return `${this.title}`;
// }

// Read.prototype.isRead = function() {
//     return `${this.read == true ? 'This Book is already read' : 'This book has not been read yet'}`;
// }





// console.log(book1.info())
// console.log(book2.info())
// console.log(book1.whatBook())
// console.log(book1.isRead())