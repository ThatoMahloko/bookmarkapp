import React, { useState } from 'react'
import '../App.css'
const NewSongFom = ({ addSong }) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release, setRelease] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title, artist, album, release, url);
        setTitle('');
    };
    return (
        <form className="bg-secondary"onSubmit={handleSubmit} style={{textAlign:"center"}}>
            <label>Song Title: </label><br />
            <input className="bg-success" type="text" required onChange={(e) => setTitle(e.target.value)} /><br />
            <label>Artist Name : </label><br />
            <input className="bg-success" type="text" required onChange={(e) => setArtist(e.target.value)} /><br />
            <label>Album Title : </label><br />
            <input className="bg-success" type="text" required onChange={(e) => setAlbum(e.target.value)} /><br />
            <label>Release Date : </label><br />
            <input className="bg-success" type="text" required onChange={(e) => setRelease(e.target.value)} /><br />
            <label>Song URL : </label><br />
            <input className="bg-success" type="text" required onChange={(e) => setUrl(e.target.value)} /><br /> 
            <input className="bg-warning mt-5" type="submit" value="add song" />
        </form>
    )
}

export default NewSongFom
