// components/Home.js
import React from 'react';
import './Home.css';
import { EMAGE_BASE_URL_1280 } from '../config';

function Home() {

  
  return (
    <div className="home">
      <img 
        src={EMAGE_BASE_URL_1280 + movie.poster_path}
        art={movie.title}
        className='main-poster'
        />
      {movies.map((movie) => {
        <MovieItem movie={movie}/>
      })}


    </div>
  );
}

export default Home;
