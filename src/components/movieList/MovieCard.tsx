import React from 'react';
import Imovie from '../../interfaces/Imovie';
import './movieList.css'

interface IMovieProps {
  movie: Imovie
}

const MovieCard: React.FC<IMovieProps> = ({ movie }): JSX.Element => {

  const IMG_API = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className='card'>
      <img className='cardImage' src={IMG_API + movie.poster_path} alt={movie.title} />
      <div className='cardContent'>
        <h2 className='movieTitle'>{movie.title}</h2>
        <h5 className='originalTitle'>{movie.original_title}</h5>
      </div>
    </div>
  );
};

export default MovieCard;