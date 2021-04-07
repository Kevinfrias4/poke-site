import React from 'react';

const Pokemon = ({ pokeData, pathId, location}) => {

    console.log(pathId, 'pathid')
    console.log("DATA", pokeData)

    /*function num () {
        let num = 1;
        return num
    }*/
    
    let num = location.pathname;
    console.log(num[num.length-1]*1);
    let num1 = num[num.length-1]*1;

    return (
        <>
            {pokeData.map((data, id) => {
                num = id;
                return (
                    <div>
                        <h1>{`${data.name.toUpperCase()}`}</h1>
                        <h1>{pathId}</h1>
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${pathId}.png`} alt='pokemon' />
                    </div>
                )
            })[num1]}
        </>
    )
}

export default Pokemon;

/*return (
    <div>
        <h1>{`${pokeData[pathId-1].name.toUpperCase()}`}</h1>
        <h3>{`${pathId}`}</h3>
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${pathId}.png`} alt='pokemon' />
    </div>
)*/

/*<div>
            {pokeData.map((data) => (
                <div>
                    <h1>{`${data.name}`}</h1>
                    <h3>{`${pathId}`}</h3>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pathId}.png`} alt='pokemon' />
                </div>
            ))[pathId-1]}
            </div>*/