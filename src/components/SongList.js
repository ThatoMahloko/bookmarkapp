import React, { useState } from 'react'
import {v1 as uuid} from 'uuid'
import NewSongFom from './NewSongFom';

const SongList = () => {
    const [song, setSong] = useState([
        { title: '', artist: '', album: '', releaseYear: '', id: 1 }
    ]);
    const addSong = (title,artist, album, releaseYear) => {
        setSong([...song, { title, artist,album,releaseYear, id: uuid() }])
    }
    return (
        <div>
            <ul className="list-group">
                {song.map(song => {
                    return (<li className="list-group-item bg-info" key={song.id}>Song Title: {song.title} ArtistName:{song.artist} Album Title:{song.album} Release Year:{song.releaseYear}</li>)
                })}
            </ul>
            <NewSongFom addSong={addSong}/><hr/>
        </div>
    );
}

export default SongList
