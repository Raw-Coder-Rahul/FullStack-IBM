let form = document.getElementById("userform");

document.addEventListener("DOMContentLoaded", function() {
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let name = document.getElementById("name").value;
            let description = document.getElementById("description").value;
            let year = document.getElementById("year").value;
            let imdb = document.getElementById("imdb").value;
            let genre = document.getElementById("genre").value;
            let poster = document.getElementById("poster").value;
            let movie = { name, description, year, imdb, genre, poster };
            let movies = JSON.parse(localStorage.getItem("movies")) || [];
            if (!(imdb >= 0 && imdb <= 10)) {
                return alert('IMDB Rating Exceed.');
            }            
            movies.push(movie);
            localStorage.setItem("movies", JSON.stringify(movies));
            alert("Movie has been added.");
            from.reset();
        });
    }
    if (document.getElementById("tbody")) {
        loadMovies();
    }
});
function loadMovies() {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = '';
    movies.forEach(movie => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${movie.name}</td>
            <td>${movie.description.substring(0, 100)}${movie.description.length > 100 ? '...' : ''}</td>
            <td>${movie.year}</td>
            <td>${movie.imdb}</td>
            <td>${movie.genre}</td>
            <td><img src="${movie.poster}" alt="${movie.name}" style="width: 50px; height: 50px;"></td>
            <td><button onclick="deleteMovie('${movie.name}')">Delete</button></td>
        `;
        tbody.appendChild(tr);
    });
}
function deleteMovie(name) {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies = movies.filter(movie => movie.name !== name);
    localStorage.setItem("movies", JSON.stringify(movies));
    loadMovies();
}
function filterMovies() {
    let filter = document.getElementById("search").value.toLowerCase();
    let trs = document.querySelectorAll("#tbody tr");
    trs.forEach(tr => {
        let text = tr.textContent.toLowerCase();
        tr.style.display = text.includes(filter) ? '' : 'none';
    });
}