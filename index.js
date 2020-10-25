// class Usersong {
//     constructor() {
//         this.songTitle = this.songTitle;
//         this.albumName = this.albumName;
//     }
// }
// const songsAp = new Usersong;
// async function lyric(){
//     const songsAp = await 
//     const data = await songsAp.json();
//     console.log(data)
//     return data;
// }
// console.log(lyric())
// function lyric(){
//     fetch(`https://api.lyrics.ovh/v1/Marshmello/FRIENDS`)
//     .then(res => res.json())
//     .then(data => {
//         document.getElementById('pera').innerHTML +=`<pre>${data()}</pre>`
//     })
// }
document.getElementById('search-songs').addEventListener("click", function(){
    const songs = document.getElementById('songs-name').value;
    document.getElementById('resultArea').style.transform = 'scale(1)';
    fetch(`https://api.lyrics.ovh/suggest/${songs}`)
    .then(res => res.json())
    .then(data => {
        const songTitle = data.data.map(songs => songs.title)
        console.log(songTitle)
        for (let i = 0; i < 10; i++) {
            const element = songTitle[i];
            const albumName = data.data[i].artist.name;
            document.getElementById("resultArea").innerHTML += `
            <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${element}</h3>
                        <p id="pera" class="author lead">Album by <span>${albumName}</span></p>  
                    </div>
                    <div id="lyrics" class="col-md-3 text-md-right text-center">
                        <button onclick="lyric()" class="btn btn-success">Get Lyrics</button>
                    </div>
                </div>
            ` 
        }
    })
    document.getElementById('songs-name').value = "";
    document.getElementById("resultArea").innerHTML = '';
})
