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

    // CREATE THE CARD 
    card.innerHTML += createCard(book)
    content.appendChild(card)

    //  DELETE BUTTON FUNCTIONALITY
    let deleteButton = document.querySelectorAll('.dlt-btn')
    for(let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', function() {
            content.removeChild(this.parentNode.parentNode.parentNode)
        })
    }
}

function createCard(book) {
    return `<div class="card text-bg-dark mb-3" style="max-width: 18rem;"><div class="card-body"><h5 class="card-title">${book.title} by ${book.author}</h5><p class="card-text">Pages: ${book.pages}<br>Book Read: ${book.read}</p><a href="#" class="btn btn-danger dlt-btn">Delete</a></div></div>`
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 