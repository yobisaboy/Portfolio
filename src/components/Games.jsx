import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

import exe from '../assets/exe.png'; // Import the images
import code from '../assets/code.png';
import play from '../assets/play.png';
import playBtn from '../assets/play-button.png'; // Import the play icon

import './Games.css'; // Import custom CSS for styling
import games from './gamesData'; // Import the games data

function Games() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">List of Games</h2>
      <p className="text-center mb-5">Explore my games and experience the creativity behind each project!</p>

      <div className="row g-2"> {/* 'g-2' reduces the gap between the cards */}
        {games.map((game) => (
          <div key={game.id} className="col-12 col-md-4 mb-4"> {/* 4 cards per row */}
            <div className="card custom-card">
              <div className="card-image">

              <a href={game.demo} target="_blank" rel="noopener noreferrer">
                  <img class="play-icon" src={playBtn} alt="Play Icon" title="Play Demo"></img>
                </a>

                <a href={game.demo} target="_blank" rel="noopener noreferrer">
                  <img class="screenshot" src={game.image} alt={game.title} title="Play Demo"></img>
                </a>
                
              </div>

              <div className="card-body">
                <h5 className="card-title">{game.title} ({game.year})</h5>
                <p className="card-text">{game.description}</p>

                <button className="small-button" title="Details">
                  <a href={game.details} className="link-button" target="_blank" rel="noopener noreferrer">
                    Learn more
                  </a></button>

                <div className="button-group">
                  <button className="btn" title="Play Game on PC">
                    <a href={game.webgl} target="_blank" rel="noopener noreferrer">
                      <img src={play} alt="WebGL" className="icon-btn" />
                    </a>
                  </button>
                  <button className="btn" title="Download Game">
                    <a href={game.exe} target="_blank" rel="noopener noreferrer">
                      <img src={exe} alt="Download(.exe)" className="icon-btn" />
                    </a>
                  </button>
                  <button className="btn" title="Unity Project">
                    <a href={game.unity} target="_blank" rel="noopener noreferrer">
                      <img src={code} alt="Unity Project" className="icon-btn" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
