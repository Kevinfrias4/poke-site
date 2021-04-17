import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { popUp, typeColor } from '../animations';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import ParticleBackground from '../particleBackground';

const Pokemon = ({ pokeData, pathId, location, pokeType, setPokeType, showDetail, setShowDetail }) => {

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
    //console.log(num[num.length-1]*1);
    let num1 = num[num.length-1]*1;

    if(pathId === undefined) {
        pathId = 1;
    };

    useEffect(() => {
        const getPokemonType = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pathId}`);
            //setPokeType(res.data.types[0].type.name)
            setPokeType(res.data);
            //console.log(res.data)
        }
        return getPokemonType()
    },[num1, pathId, setPokeType]);

    return (
        <AnimatePresence>
        {showDetail && (
            <CardShadow className='shadow' onClick={exitDetailHandler}>
                <PokeCard className='none' variants={popUp} initial='hidden' animate='show' exit='exit' layoutId={num1}>
                    {pokeData.map((data, id) => {
                        num = id;
                        const color = typeColor[pokeType.types[0].type.name];
                        return (
                            <motion.div style={{background:`linear-gradient(to bottom, ${color}, white)`, width: '100%', borderRadius: '50px',  boxShadow:'7px 7px 30px #696969' }}>
                                <ParticleBackground />
                                {/*<motion.h1>{`${data.name.toUpperCase()}`}</motion.h1>*/}
                                <h1>{pokeType.name.toUpperCase()}</h1>
                                <motion.h2>#{pathId}</motion.h2>
                                <motion.img src={`https://pokeres.bastionbot.org/images/pokemon/${pathId}.png`} alt='pokemon' />
                                <Types className='types'>
                                    <p style={{backgroundColor: color}}>{pokeType.types[0].type.name}</p>
                                    {pokeType.types[1] && (
                                        <p style={{backgroundColor: typeColor[pokeType.types[1].type.name]}}>{pokeType.types[1].type.name}</p>
                                    )}
                                </Types>
                                <h4>HP:{' ' + pokeType.stats[0].base_stat}</h4>
                                <h4>HEIGHT:{' ' + pokeType.height}</h4>
                                <h4>WEIGHT:{' ' + pokeType.weight}</h4>
                                <p>{pokeType.location_area}</p>
                                {/*<img src={pokeType.sprites.other.dream_world['front_default']} alt=""/>*/}
                            </motion.div>
                        );
                    })[num1]}
                </PokeCard>
            </CardShadow>
        )}
        </AnimatePresence>
    )
}

const Types = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-top: -0.5rem;
    z-index: 10;
    transform: translateY(-450px);
    p {
        text-align: center;
        width: 10vh;
        font-size: 23px;
        font-weight: bolder;
        background: thistle;
        padding: 1rem;
        margin: 0rem 1rem 0rem 1rem;
        border-radius: 25px;
        box-shadow: inset 10px 10px 13px 0 rgba(0, 0, 0, 0.4), inset -10px -10px 8px 0 rgba(255, 255, 255, 0.3);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        //box-shadow: inset 10px 10px 7px 0 rgba(0, 0, 0, 0.2), inset -10px -10px 18px 0 rgba(255, 255, 255, 0.3);
        color: #696969;
    }
`;

const PokeCard = styled(motion.div)`
    z-index: 10;
    display: flex;
    justify-content: center;
    text-align: center;
    position: fixed;
    width: 60%;
    height: 80vh;
    margin-left: 13rem;
    //box-shadow: 0px -9px 30px 17px rgba(134, 117, 156, 0.849);
    border-radius: 50px;
    background: white;
    overflow-y: scroll;
    &.none::-webkit-scrollbar {
        width: 0rem;
    }
    img {
        animation: bounce 15s ease infinite;
        animation-iteration-count: 1;
        width: 50vh;
        height: 50vh;
        object-fit: cover;
        -webkit-filter: drop-shadow(10px 10px 10px #929191);
        filter: drop-shadow(7px 7px 7px #696969);
        transform: scale(1.1) translateY(-450px) translateX(-4px) skew(3.5deg);
    }
    @keyframes bounce {
        50% {
            transform: translateX(-5%) translateY(-129.9%) scale(1.2) skewX(3.5deg)
        }
    }

    h1 {
        transform: translateY(-450px);
        color: #696969;
    }
    h2 {
        transform: translateY(-475px);
    }
    @media screen and (max-width: 768px) {
        overflow: hidden;
        margin-left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0px -9px 30px 17px rgba(108, 170, 211, 0.849);
        overflow-y: scroll;
        img {
            width: 35vh;
            height: 35vh;
            transform: translateY(-220px)
        }
        h1, h4{
            transform: translateY(-170px)
        }
        h2 {
            transform: translateY(-195px)
        }
        .types {
            p {
                margin: 0rem 0.5rem 0rem 0.5rem;
            }
            transform: translateY(-200px);
            margin: 0rem;
        }
        @keyframes bounce {
            50% {
                transform: translateX(0%) translateY(-90.9%) scale(1.2) skewX(3.5deg)
            }
        }
    }
`;

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    //overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
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