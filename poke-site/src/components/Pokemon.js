import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { popUp, typeColor, stats } from '../animations';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import ParticleBackground from '../particleBackground';

const Pokemon = ({ pokeData, pathId, location, pokeType, setPokeType, showDetail, setShowDetail }) => {

    const[showStats, setShowStats] = useState(null)
    const history = useHistory();
    //Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            document.body.style.position = 'absolute';
            history.push('/');
            setShowDetail(!showDetail);
            if(showStats) {
                document.body.style.overflow = 'auto';
                setShowStats(!showStats)
            }
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

    function showStat () {
        setShowStats(!showStats)
    }

    return (
        <AnimatePresence>
        {showDetail && (
            <CardShadow className='shadow' onClick={exitDetailHandler}>
                <PokeCard className='none' variants={popUp} initial='hidden' animate='show' exit='exit' layoutId={num1}>
                    {pokeData.map((id) => {
                        num = id;
                        const color = typeColor[pokeType.types[0].type.name];
                        return (
                            <motion.div style={{background:`linear-gradient(to bottom, ${color}, white)`, width: '100%', borderRadius: '50px',  boxShadow:'7px 7px 30px #696969' }}>
                                <ParticleBackground />
                                {/*<motion.h1>{`${data.name.toUpperCase()}`}</motion.h1>*/}
                                <h1>{pokeType.name.toUpperCase()}</h1>
                                <motion.h2>#{pathId}</motion.h2>
                                <motion.img className='img' src={`https://pokeres.bastionbot.org/images/pokemon/${pathId}.png`} alt='pokemon' />
                                <Types className='types'>
                                    <p style={{backgroundColor: color}}>{pokeType.types[0].type.name}</p>
                                    {pokeType.types[1] && (
                                        <p style={{backgroundColor: typeColor[pokeType.types[1].type.name]}}>{pokeType.types[1].type.name}</p>
                                    )}
                                    <IMAGE className='statsButton' src='http://static.appvn.com/aic_launcherdsf1e56fe1w6f5ew4f.png' onClick={showStat} />
                                </Types>
                                {showStats && (
                                    <Stats variants={stats} animate='show' initial='hidden' exit='exit'>
                                        <h3 style={{fontSize: '25px'}}>STATS</h3>
                                        <h3><span>HP</span>:{' ' + pokeType.stats[0].base_stat}</h3>
                                        <h3><span>HEIGHT</span>:{' ' + pokeType.height}</h3>
                                        <h3><span>WEIGHT</span>:{' ' + pokeType.weight}</h3>
                                    </Stats>
                                )}
                            </motion.div>
                        );
                    })[num1]}
                </PokeCard>
            </CardShadow>
        )}
        </AnimatePresence>
    )
}

const IMAGE = styled(motion.img)`
    position: absolute;
    transform: translateY(-40px);
`;

const PokeCard = styled(motion.div)`
    z-index: 10;
    display: flex;
    justify-content: center;
    text-align: center;
    align-content: center;
    position: fixed;
    top: 0;
    left: 0; 
    right: 0;
    bottom: 0;
    width: 60%;
    height: 100vh;
    margin-left: 13rem;
    //box-shadow: 0px -9px 30px 17px rgba(134, 117, 156, 0.849);
    border-radius: 50px;
    background: white;
    //overflow-y: scroll;
    overflow-y: hidden;
    .img {
        z-index: 21;
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
        z-index: 3;
        font-family: 'Freckle Face', cursive;
        letter-spacing: 4px;
        font-size: 47px;
        font-weight: bolder;
        transform: translateY(-440px);
        color: #ee8080;
    }
    h2 {
        font-family: 'Freckle Face', cursive;
        color: #696666;
        transform: translateY(-475px);
    }
    @media screen and (max-width: 768px) {
        overflow: hidden;
        margin-left: 0;
        width: 100%;
        //height: 100%;
        box-shadow: 0px -9px 30px 17px rgba(108, 170, 211, 0.849);
        position: absolute;
        z-index: 20;
        .img {
            object-fit: cover;
            z-index: 21;
            width: 39vh;
            height: 39vh;
            transform: translateY(-260px)
        }
        h1 {
            z-index: 20;
            color: #ee8080;
        }
        h1, h4{
            transform: translateY(-190px);
        }
        h2 {
            transform: translateY(-230px)
        }
        .types {
            p {
                margin: 0rem 0.5rem 0rem 0.5rem;
            }
            transform: translateY(-230px);
            margin: 0rem;
        }
        @keyframes bounce {
            50% {
                transform: translateX(0%) translateY(-90.9%) scale(1.2) skewX(3.5deg)
            }
        }
    }
`;

const Types = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-top: -0.4rem;
    z-index: 1;
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
        color: #817878;
    }
    .statsButton {
        transform: translateX(145px);
        margin: 0rem 0rem 0rem 5.5rem;
        padding: 0rem;
        width: 2.5rem;
        height: 2.5rem;
        @media screen and (max-width: 768px) {
            margin: 0rem 0rem 0rem 0.5rem;
        }        
    }
`;

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
`;

const Stats = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    align-content: center;
    z-index: 3;
    //overflow: hidden;
    margin-left: 0.7rem;
    width: 30%;
    padding: 5rem;
    height: 18vh;
    border-radius: 25px;
    //background: #f1eec6;
    line-height: 0px;
    color: #796f6f;
    background: rgba( 245, 245, 245, 0.75 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 2px );
    border-radius: 50px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    span {
        color: #52a1d6;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0rem;

        overflow: hidden;
        width: 100%;
        margin: 0rem;
        //margin-left: 9rem;
        line-height: 25px;
        height: 48vh;
        h3, p {
            color: #796f6f;
            font-size: 20px;
            transform: translateY(20px)
        }
    }
`;

/*
<div style={{paddingBottom: '8rem'}}>
    <h2>Dream World Art</h2>
    <img src={pokeType.sprites.other.dream_world['front_default']} alt=""/>
</div> */
export default Pokemon;