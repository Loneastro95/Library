const myLibrary = [{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925,
    "genre": "Classic",
},
];

function Book(title, author, year, genre){
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
}

function addNewBook(){
    const listOfBooks = myLibrary.map((list) => list);
    console.log(listOfBooks);
}

addNewBook();

const cardContainer = document.querySelector('.card-container');

const fetchCards = () => {
    // Clear the cardContainer before adding new cards
    cardContainer.innerHTML = '';

    myLibrary.map((data) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <h1 class="title">${data.title}</h1>
            <h2 class="author">${data.author}</h2>
            <h4 class="year">${data.year}</h4>
            <h3 class="genre">${data.genre}</h3>
        `;
        cardContainer.appendChild(cardElement);
    });
}
fetchCards();


const addData = () =>{
    let title = document.sample.title.value;
    let author = document.sample.author.value;
    let year = document.sample.year.value;
    let genre = document.sample.genre.value;

    // Create a new Book object
    const newBook = new Book(title, author, year, genre);

    // Push the new book object into myLibrary
    myLibrary.push(newBook);

    // Re-fetch the updated list of cards
    fetchCards();
}

