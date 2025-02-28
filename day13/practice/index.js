let books = [
    {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, rating: 4.0},
    {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, rating: 4.5},
    {title: "1984", author: "George Orwell", year: 1949, rating: 4.8},
    {title: "Pride and Prejudice", author: "Jane Austen", year: 1813, rating: 4.2},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, rating: 4.3},
    {title: "Moby-Dick", author: "Herman Melville", year: 1851, rating: 3.9},
    {title: "War and Peace", author: "Leo Tolstoy", year: 1869, rating: 4.6},
    {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, rating: 4.7}
];
books.sort((a, b) => a.year - b.year);
console.log("Books sorted by year:", books);

let highestRatedBook = books.reduce((prev, current) => (prev.rating > current.rating) ? prev : current);
console.log("Highest Rated Book:", highestRatedBook);

let modernBooks = books.filter(book => book.year > 1900);
console.log("Modern Books:", modernBooks);

function searchBookByTitle(books, title) {
    return books.find(book => book.title.toLowerCase() === title.toLowerCase());
}

let searchTitle = "1984";
let foundBook = searchBookByTitle(books, searchTitle);
console.log(`Book with title "${searchTitle}":`, foundBook);

books.sort((a, b) => {
    let titleA = a.title.toLowerCase();
    let titleB = b.title.toLowerCase();

    if (titleA < titleB) {
        return -1;
    }
    if (titleA > titleB) {
        return 1;
    }
    return 0;
});
console.log("Books sorted by title:", books);
