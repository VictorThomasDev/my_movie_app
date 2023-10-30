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
  const rate = movie.vote_average * 10;
  const color = rate >= 70 ? 'green' : (rate > 50 ? 'orange' : 'red');

  const IMG_API = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="w-64 bg-white border border-gray-300 rounded p-2 m-2 inline-block shadow-md transform transition-transform hover:scale-103 cursor-pointer">
      <img className="w-full" src={IMG_API + movie.poster_path} alt={movie.title} />
      <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-white items-center">
        <RatePie percentage={rate} colour={color} />
      </div>
      <div className="p-2 text-center">
        <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
        <h5 className="text-sm truncate">{movie.original_title}</h5>
        <h5 className="text-sm truncate">{movie.release_date}</h5>
      </div>
      <button onClick={() => setSelectedMovie(movie.id)}>See more</button>
    </div>
  );
};

export default MovieCard;