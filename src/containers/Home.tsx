import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieList from '../components/movieList/MovieCard';
import Pagination from '../components/pagination/Pagination'
import Spinner from '../components/Spinner/Spinner';
import { USER_PER_PAGE } from '../constants';
import Imovie from '../interfaces/Imovie';
import Imovies from '../interfaces/Imovies';
import getMovies from '../service/getMovies';

const Home: React.FC = (): JSX.Element => {

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Imovies>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('data')
    getMovies(page)
      .then((data: Imovies): void => {
        console.log(data)
        setMovies(data)
        setTotalPages(data.total_pages);
        setLoading(false)
      })
      .catch(() => {
        console.log('err')
      })
  }, [page]);

  const handleClick = (num: number) => {
    setPage(num);
  }
  return (
    <Container>
      {!loading ? (
        <>
          <section className='card-list'>
            {movies?.results.map((movie: Imovie, i: number) => (
              <>
                <MovieList key={i} movie={movie} ></MovieList>
              </>
            ))}
          </section>
          <Pagination totalPages={totalPages} handleClick={handleClick} />
        </>
      )
        :
        <Spinner></Spinner>}

    </Container>
  )
}
export default Home