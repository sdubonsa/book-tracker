// VARIABLES
let library = []

// OBJECTS
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id
}

// QUERY SELECTORS
let content = document.querySelector('.content')
let addBookButton = document.querySelector('.add-book-btn')
var form = document.querySelector("form");

// EVENT HANDLERS
addBookButton.addEventListener('click', openForm)

form.onsubmit = function(e){
    e.preventDefault();

    let title = document.getElementById("book-name").value
    let author =  document.getElementById("book-author").value
    let pages = document.getElementById("book-pages").value
    let isRead = document.getElementById("is-read").value

    if(isRead === 'on') {
        isRead = true
    } else [
        isRead = false
    ]

    let book = new Book(title, author, pages, isRead)

    // ADD BOOK TO STORAGE, GIVE BOOK AN ID
    library.push(book)
    book.id = library.length

    addNewBook(book)
    form.reset()
}

// FUNCTIONS
function addNewBook(book) {
    // GIVE APPROPRIATE CLASSES
    let card = document.createElement('div')
    card.classList.add('col-sm-3')
    card.classList.add(`book-${book.id}`)

    // CREATE THE CARD 
    card.innerHTML += createCard(book)
    content.appendChild(card)

    // ADD DELETE BUTTON FUNCTIONALITY
    let deleteButton = document.querySelector(`.btn-${book.id}`)
    console.log(book.id)
    deleteButton.addEventListener('click', function() {
        deleteCard(book.id)
    })
}

function createCard(book) {
    return `<div class="card text-bg-dark mb-3" style="max-width: 18rem;"><div class="card-body"><h5 class="card-title">${book.title} by ${book.author}</h5><p class="card-text">Pages: ${book.pages}<br>Book Read: ${book.read}</p><a href="#" class="btn btn-danger btn-${book.id}">Delete</a></div></div>`
}

function deleteCard(bookID) {
    let card = document.querySelector(`.book-${bookID}`)
    console.log(bookID)
    content.removeChild(card)
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 