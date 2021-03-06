import './App.css';
import {useState,useEffect} from 'react';
import Player from './components/Player';

function App() {
  const[songs, setSongs]=useState([
    {
    title: "Forget me too ft. Halsey",
    artist: "Machine Gun Kelly",
    img_src: "./images/song-1.jpg",
    src: "./music/music_on-n-on.mp3"
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    img_src: "./images/song-2.jpg",
    src: "./music/music_somebody-new.mp3"
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    img_src: "./images/song-3.jpg",
    src: "./music/music/Believe.mp3"
  },
  {
    title: "Song 4",
    artist: "Artist 4",
    img_src: "./images/song-4.jpg",
    src: "./music/Hustlin.mp3"
  }

  ]);

const[currentSongIndex,setCurrentSongIndex] =useState(0);
const[nextSongIndex, setNextSongIndex] = useState(currentSongIndex+1)

useEffect(()=>{
  setNextSongIndex(()=>{
    if(currentSongIndex+1 > songs.length-1){
      return 0;
    }else{
      return currentSongIndex+1 
    }
  })

},[currentSongIndex])
  return (
    <div className="App">
    <Player 
    currentSongIndex={currentSongIndex}
    setCurrentSongIndex={setCurrentSongIndex}
    nextSongIndex={nextSongIndex}
    songs={songs}
    />
    </div>
  );
}

export default App;
