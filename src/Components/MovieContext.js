import React, { createContext, useState } from 'react';
import { MovieList } from './MovieList';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Inception',
            year: '2010',
            id: 1
        },
        {
            name: 'DarkKnight',
            year: '2008',
            id: 2
        },
        {
            name: 'Interstellar',
            year: '2014',
            id: 3
        }
    ]);

    return (
        <div>
            <MovieContext.Provider value={movies}>
                <MovieList />
            </MovieContext.Provider>
        </div>
    )
}