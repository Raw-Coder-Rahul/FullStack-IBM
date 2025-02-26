let form = document.getElementById("userform");

document.addEventListener("DOMContentLoaded", function() {
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let name = document.getElementById("name").value;
            let artist = document.getElementById("artist").value;
            let album = document.getElementById("album").value;
            let year = document.getElementById("year").value;
            let genre = document.getElementById("genre").value;
            let cover = document.getElementById("cover").value;
            let song = { name, artist, album, year, genre, cover };
            let songs = JSON.parse(localStorage.getItem("songs")) || [];
            songs.push(song);
            localStorage.setItem("songs", JSON.stringify(songs));
            alert("Song has been added.");
            form.reset();
            loadSongs();  // Load songs after adding a new one
        });
    }
    if (document.getElementById("musicDetails")) {
        loadSongs();
    }
});

function toggleMusicDetails() {
    const musicDetails = document.getElementById("musicDetails");
    if (musicDetails.style.display === "none") {
        musicDetails.style.display = "table";
    } else {
        musicDetails.style.display = "none";
    }
}

function loadSongs() {
    let songs = JSON.parse(localStorage.getItem("songs")) || [];
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = '';
    songs.forEach(song => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${song.name}</td>
            <td>${song.artist}</td>
            <td>${song.album}</td>
            <td>${song.year}</td>
            <td>${song.genre}</td>
            <td><img src="${song.cover}" alt="${song.name}" style="width: 50px; height: 50px;"></td>
            <td><button onclick="deleteSong('${song.name}')">Delete</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteSong(name) {
    let songs = JSON.parse(localStorage.getItem("songs")) || [];
    songs = songs.filter(song => song.name !== name);
    localStorage.setItem("songs", JSON.stringify(songs));
    loadSongs();
}
