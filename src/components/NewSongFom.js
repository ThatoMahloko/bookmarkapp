import React, { useState } from 'react'

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
        <form onSubmit={handleSubmit}>
            <label>Song Title:</label>
            <input type="text" required onChange={(e) => setTitle(e.target.value)} />
            <input type="text" required onChange={(e) => setArtist(e.target.value)} />
            <input type="text" required onChange={(e) => setAlbum(e.target.value)} />
            <input type="text" required onChange={(e) => setRelease(e.target.value)} />
            <input type="text" required onChange={(e) => setUrl(e.target.value)} />
            <input type="submit" value="add song" />
        </form>
    )
}

export default NewSongFom
