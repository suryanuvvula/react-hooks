import React, { useContext } from 'react';
import { Movie } from './Movie';
import { MovieContext } from './MovieContext';

export const MovieList = () => {
    const movies = useContext(MovieContext);

    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} year={movie.year}></Movie>
            ))}
        </div>
    )
}