import React from 'react';

const Pokemon = ({ pokeData, pathId }) => {

    return (
        <div>
            <h1>{`${pokeData[pathId++].name}`}</h1>
            <h3>{`${pathId}`}</h3>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${pathId}.png`} alt='pokemon' />
        </div>
    )
}

export default Pokemon;