import React from 'react';
import './Music.css';
import albumCover1 from '../images/Tum_Hi_Ho_cover.jpeg'; // Hotel California by The Eagles
import albumCover2 from '../images/kabira.jpg'; // Back in Black by AC/DC
import albumCover3 from '../images/Tum ko aaye.jpg'; // Appetite for Destruction by Guns N' Roses

const favoriteGenres = ["Bollywood", "Indie", "Classical", "Rock", "Folk"];
const favoriteAlbums = [
  { title: "Tum Hi Ho", artist: "Arijit Singh", imgSrc: albumCover1 },
  { title: "Tum Jo Aaye", artist: "Rahat Fateh Ali Khan, Alka Yagnik", imgSrc: albumCover2 },
  { title: "Kabira", artist: "Arijit Singh, Harshdeep Kaur", imgSrc: albumCover3 },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“Music is the universal language of mankind.” 🎶</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
