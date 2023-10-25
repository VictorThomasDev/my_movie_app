import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface IMovieProps {
    movie: any
}

const MovieList: React.FC<IMovieProps> = ({ movie }): JSX.Element => {

    console.log('movie', movie)
    const IMG_API = 'https://image.tmdb.org/t/p/w500';
    return (
        <>
            <Box
                display="flex"
            >
                <Box m="auto">
                    <Card style={{ width: 275, margin: 20 }}>
                        {/* <CardActionArea> */}
                        <CardMedia style={{ height: 400 }} image={IMG_API} />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {movie.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

            </Box>
        </>
    );
};

export default MovieList;