import React from "react";

function SongL({songs,setCurrentSong,setIsPlayinng}){
    function handleSongClick(song){
        setCurrentSong(song);
        setIsPlayinng(false);
    }
    return(
        <ul>
            {songs.map((songs) => {
                return(

                    <li key={songs.id} onClick={() => handleSongClick(songs)}>
                        {songs.title} - {songs.artist}
                    </li> 
                )
            })}
        </ul>
    );
}
export default SongL;