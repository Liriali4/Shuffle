import './App.css';

function App() {



  const playlist = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }

    // {id: 567,title: "Meia Noite",artist: "Monsta",album: "Meia Noite",},
    // { id: 56, title: "Tóxico", artist: "NGA", album: "Tóxico",},
    // {id: 97, title: "Caixões Personalizados",artist: "Prodígio",album: "Prodigia-Te (Tuga Deluxe)",},
    // {id: 987,title: "Eu Não Danço",artist: "Eva Rapdiva",album: "Eu Não Danço",},
    // { id: 356,title: "Mobber",artist: "Gio-O, Xuxu Bower", album: "Mobber",}
  ]
  const currentSong = 2;
  let click = false;


  const shufflePlaylist = [...playlist]

  console.log("Sem função", playlist)

  function Shuffle() {

      let n = shufflePlaylist.length;
      for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shufflePlaylist[i], shufflePlaylist[j]] = [shufflePlaylist[j], shufflePlaylist[i]];
      }

      const positionToDelete = shufflePlaylist.indexOf(playlist[currentSong])
      shufflePlaylist.splice(positionToDelete, 1);
      shufflePlaylist.splice(0, 0, playlist[currentSong]);
    
  }

    function Clicked() {
      if (click === false) {
        click = true;
        Shuffle()
        console.log(click)
        console.log("UNshuffle==>>", playlist)
        console.log("shuffle==>>", shufflePlaylist)

      } else {
        click = false;
        console.log(click)
      
        console.log("UNshuffle==>>", playlist)

      }
    }

    return (
      <div className="App">
        <button onClick={Clicked}>shuffle</button>

      </div>
    );
  }


export default App;
