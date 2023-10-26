import React, { useState } from 'react';
import Imovie from '../../interfaces/Imovie';
import RatePie from '../ratePie/RatePie';
import './movieList.css'

interface IMovieProps {
  movie: Imovie
}

function findColor(rate: number): string {
  if (rate >= 70) {
    return ('green')
  } else if (rate > 50 && rate < 70) {
    return ('orange')
  } else {
    return ('red')
  }
}

const MovieCard: React.FC<IMovieProps> = ({ movie }): JSX.Element => {

  const [selectedMovie, setSelectedMovie] = useState<number>()
  const handleMovie = () => {
    setSelectedMovie(movie.id)
  }

  const rate: number = movie.vote_average * 10
  const color: string = findColor(rate)


  const IMG_API = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className='card'>
      <img className='cardImage' src={IMG_API + movie.poster_path} alt={movie.title} />
      <RatePie percentage={rate} colour={color} />
      <div className='cardContent'>
        <h2 className='movieTitle'>{movie.title}</h2>
        <h5 className='originalTitle'>{movie.original_title}</h5>
        <h5 className='originalTitle'>{movie.release_date}</h5>
      </div>
      <button onClick={handleMovie}>See more</button>
    </div>
  );
};

export default MovieCard;