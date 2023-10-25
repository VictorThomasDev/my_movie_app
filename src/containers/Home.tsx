import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination'
import Spinner from '../components/Spinner/Spinner';
import { USER_PER_PAGE } from '../constants';
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
        setTotalPages(Math.ceil(data.results.length / USER_PER_PAGE));
        setLoading(false)
      })
      .catch(() => {
        console.log('err')
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (num: number) => {
    setPage(num);

    getMovies(page)
      .then((data: any): void => {
        setMovies(data)
        setTotalPages(Math.ceil(data?.results.length / USER_PER_PAGE));
        setLoading(false)
      })
      .catch()
  }
  return (
    <Container>
      <h1>
        Home
      </h1>
      {!loading ? (
        <ul>
          {movies?.results.map((movie: any, i: any) => (
            <>
              toto
              <MovieList key={i} movie={movie} ></MovieList>
            </>
          ))}
          <Pagination totalPages={totalPages} handleClick={handleClick} />
        </ul>)
        :
        <Spinner></Spinner>}

    </Container>
  )
}
export default Home