import React from 'react';

export const Movie = (props) => {
    return (
        <div>
            <p>Movie name: {props.name}</p>
            <p>Movie year: {props.year}</p>
        </div>
    )
}