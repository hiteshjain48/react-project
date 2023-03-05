import React, {useState, useRef} from "react";
import Pause from './Pause';
import Play from './Play';
import SongL from "./SongList";
function Player(){
    const [songs, setSongs] = useState([
        {id:1, title:'Song1', artist:"Artist 1", url:'/songs/1.mp3'},
        {id:2, title:'Song2', artist:"Artist 2", url:'/songs/2.mp3'},
        {id:3, title:'Song3', artist:"Artist 3", url:'/songs/3.mp3'},
        {id:4, title:'Song4', artist:"Artist 4", url:'/songs/4.mp3'}
    ])
    
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElement = useRef(null);
    function handlePlay(){
        setIsPlaying(true);
        audioElement.current.play();
    }
    function handlePause(){
        setIsPlaying(false);
        audioElement.current.pause();
    }
    return (
        <div className="music">
            <h1>Music Player</h1>
            <SongL songs={songs} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying}/>
            {currentSong && (
                <div>
                    <audio src={currentSong.url} ref={audioElement}></audio>
                    <h2>{currentSong.title}</h2>
                    <h2>{currentSong.artist}</h2>
                    { isPlaying ?(
                        <Pause handlePause={handlePause}/>
                    ):(
                        <Play handlePlay={handlePlay}/>
                    )
                    }
                </div>
            )}
        </div>
    );
}

export default Player;