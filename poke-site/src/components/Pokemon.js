import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { popUp, typeColor } from '../animations';
import { motion } from 'framer-motion';
import axios from 'axios';

const Pokemon = ({ pokeData, pathId, location, pokeType, setPokeType, showDetail, setShowDetail}) => {

    const history = useHistory();
    //Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push('/');
            setShowDetail(!showDetail);
        }
    }
    
    let num = location.pathname;
    console.log(num[num.length-1]*1);
    let num1 = num[num.length-1]*1;

    useEffect(() => {
        const getPokemonType = async () => {
            if(pathId === undefined) {
                pathId = 1;
            };
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pathId}`);
            //setPokeType(res.data.types[0].type.name)
            setPokeType(res.data);
        }
        return getPokemonType()
    },[num1, pathId])

    return (
        <>
        {showDetail && (
            <CardShadow className='shadow' onClick={exitDetailHandler}>
                <PokeCard variants={popUp} initial='hidden' animate='show' exit='exit' layoutId={pathId}>
                    {pokeData.map((data, id) => {
                        num = id;
                        const color = typeColor[pokeType.types[0].type.name];
                        return (
                            <div style={{backgroundColor: color}}>
                                <h1>{`${data.name.toUpperCase()}`}</h1>
                                <h1>{pathId}</h1>
                                <p>{pokeType.types[0].type.name}</p>
                                {pokeType.types[1] && (
                                    <p>{pokeType.types[1].type.name}</p>
                                )}
                                <img src={`https://pokeres.bastionbot.org/images/pokemon/${pathId}.png`} alt='pokemon' />
                            </div>
                        );
                    })[num1]}
                </PokeCard>
            </CardShadow>
        )}
        </>
    )
}

const PokeCard = styled(motion.div)`
    z-index: 10;
    display: flex;
    justify-content: center;
    width: 60%;
    height: 80vh;
    margin-left: 13rem;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    border-radius: 50px;
    background: white;
    img {
        width: 50vh;
        height: 50vh;
        object-fit: cover;
        -webkit-filter: drop-shadow(10px 10px 10px #929191);
        filter: drop-shadow(7px 7px 7px #696969);
    }
    h1 {
        color: #b95b5b;
    }
`;

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    overflow: hidden;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`;

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


            /*console.log(pathId, 'pathid')
            console.log("DATA", pokeData)
            console.log(pokeType, 'type')*/