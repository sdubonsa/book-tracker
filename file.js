// VARIABLES
let library = []

// OBJECTS
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let bookOne = Book('Test Book', 'Santiago Dubon', '300', true)

// QUERY SELECTORS
let content = document.querySelector('.content')
let addBookButton = document.querySelector('.add-book-btn')

// EVENT HANDLERS
addBookButton.addEventListener('click', addNewBook)

// FUNCTIONS
function addNewBook() {
    let cardContainer = document.createElement('div')
    cardContainer.classList.add('col-sm-4')

    cardContainer.innerHTML += '<div class="card text-bg-dark mb-3" style="max-width: 18rem;"> <div class="card-header">Header</div> <div class="card-body"><h5 class="card-title">Dark card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p></div></div>'

    content.appendChild(cardContainer)
}