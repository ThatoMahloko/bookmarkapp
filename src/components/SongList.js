import React, { useState } from 'react'
import uuid from 'uuid/v1'
import NewSongFom from './NewSongFom';

const SongList = () => {
    const [song, setSong] = useState([
        { title: '', artist: '', album: '', releaseYear: '', id: 1 }
    ]);
    const addSong = (title) => {
        setSong([...song, { title, id: uuid() }])
    }
    return (
        <div>
            <ul>
                {song.map(song => {
                    return (<li key={song.id}>{song.title} {song.artist} {song.album} {song.releaseYear}</li>)
                })}
            </ul>
            <button onClick={addSong}>Add a song</button>
            <NewSongFom addSong={add}/>
        </div>
    );
}

export default SongList
