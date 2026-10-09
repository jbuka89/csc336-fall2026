let rootDiv = document.querySelector("#root")

let genreData = ["rock", "pop", "blues", "jazz", "classical", "audiobook"]


//JSON
let albums = [
    {
        artist: "Metallica",
        album: "Black Album",
        genre: "unknown"

    },
    {
        artist: "The Avalanches",
        album: "Since I left You",
        genre: "unknown"
    },
    {
        artist: "Led Zeppelin",
        album: "II",
        genre: "unknown"
    },
    {
        artist: "Stevie Wonder",
        album: "Innervisions",
        genre: "unknown"    
    }
];


function renderAlbum(album) {
    let albumDiv = document.createElement("div")
    albumDiv.classList.add("album");
    rootDiv.append(albumDiv)

    let artistH1 = document.createElement("h1")
    artistH1.innerHTML = album.artist
    albumDiv.append(artistH1)

    let albumH2 = document.createElement("h2")
    albumH2.innerHTML = album.album;
    albumDiv.append(albumH2)

    let selectElement = document.createElement("select")
    albumDiv.append(selectElement);

    selectElement.addEventListener("change", e => {
        console.log("Changed " + album.album + " from " + album.genre + " to " + selectElement.value)
        album.genre = selectElement.value;
    })


    for (let genre of genreData) {
        let optionElement = document.createElement("option");
        optionElement.value = genre;
        optionElement.innerHTML = genre;
        selectElement.append(optionElement);
    }
}



for (let album of albums) {
    renderAlbum(album)
}

// let selectElement = document.createElement("select");
// rootDiv.append(selectElement)

// selectElement.addEventListener("change", (e) => {
//     console.log(selectElement.value)
// })

// for (let genre of genreData){
//     let optionElement = document.createElement("option");
//     optionElement.value = genre;
//     optionElement.innerHTML = genre;
//     selectElement.append(optionElement);
// }
