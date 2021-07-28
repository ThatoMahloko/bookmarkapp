import React, { useState } from 'react'
import {v1 as uuid} from 'uuid'
import NewSongFom from './NewSongFom';

const SongList = () => {
    const [song, setSong] = useState([
        { title: '', artist: '', album: '', releaseYear: '',url:'', id: 1 }
    ]);
    const addSong = (title,artist, album, releaseYear) => {
        setSong([...song, { title, artist,album,releaseYear, id: uuid() }])
    }
    return (
        <div style={{textAlign:"center"}}>
            <ul className="list-group">
                {song.map(song => {
                return (<li href={song.url} className="list-group-item bg-info" key={song.id}>Song Title: {song.title}{<br/>} ArtistName: {song.artist}{<br/>} Album Title: {song.album}{<br/>} Release Year: {song.releaseYear}{<br/>}</li>)
                })}
            </ul>
            <NewSongFom addSong={addSong}/><hr/>
        </div>
    );
}

export default SongList
