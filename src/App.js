import './App.css';

function App() {

    const position = 0;
    const currentSong = 1;


    const playlist = [ 
      {id: 567,title: "Meia Noite",artist: "Monsta",album: "Meia Noite",},
      { id: 56, title: "Tóxico", artist: "NGA", album: "Tóxico",},
      {id: 97, title: "Caixões Personalizados",artist: "Prodígio",album: "Prodigia-Te (Tuga Deluxe)",},
      {id: 987,title: "Eu Não Danço",artist: "Eva Rapdiva",album: "Eu Não Danço",},
      { id: 356,title: "Mobber",artist: "Gio-O, Xuxu Bower", album: "Mobber",}
  ]   

 /*function Shuffle(){

      let shufflePlaylist = [...playlist];
           

          shufflePlaylist.sort((a,b) => Math.random() - 0.5);
          
          playlist[currentSong] = shufflePlaylist[position]

            console.log("shuffle==>", shufflePlaylist)
            console.log("ordem==>", playlist)
          
  }*/
const lista = [1,2,3,4,5]

console.log(lista)

  function Shuffle(){

         let n = lista.length;
         for(let i = n -1; i>0;i--){
          let j = Math.floor(Math.random()*(i+1));
          [lista[i], lista[j]]= [lista[j], lista[i]];
         }

    console.log(lista)  
}

  return (
    <div className="App">
     <button onClick={ Shuffle}>shuffle</button>
    
    </div>
  );
}

export default App;
