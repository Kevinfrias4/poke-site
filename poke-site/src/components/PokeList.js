import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { listSlide } from '../animations'

const PokeList = ({ pokeData, nextPage, prevPage, setShowDetail, showDetails }) => {
    
    function showDet () {
        setShowDetail(!showDetails);
    };

    return (
        <>
            <Pagination>
                {prevPage && <Button onClick={prevPage}>Previous</Button>}
                {nextPage && <Button onClick={nextPage}>Next</Button>}
            </Pagination>
            <List variants={listSlide} initial='hidden' animate='show' exit='exit'>
                {pokeData.map((data, id) => (
                <Link to={`/${data.name}/${data.url.substring(34, data.url.length-1)}/${id}`} key={id} onClick={showDet}>
                    <PokeContainer className='card'>
                        <motion.h3>{`${data.name}`}</motion.h3>
                        <motion.img src={`https://pokeres.bastionbot.org/images/pokemon/${data.url.substring(34, data.url.length-1)}.png`} alt='pokemon' />
                    </PokeContainer>
                </Link>
                ))}
            </List>
        </>
    );
}

const List = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 0.5fr));
    grid-column-gap: 0rem;
    grid-row-gap: 1rem;
    a {
        cursor: default;
        text-decoration: none;
    }
    overflow: hidden;
    height: 95vh;
    margin-top: 1.5rem;
`;

const PokeContainer = styled(motion.div)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    border-radius: 25px;
    border-width: 5px;
    padding: 0rem 0rem 2rem 0rem;
    margin: 0.5rem 0rem 0rem 2rem;
    //overflow: hidden;
    //background: linear-gradient(to bottom right, thistle, lightblue, white);
    &.card:hover {
        background: linear-gradient(to bottom right,hotpink, white, hotpink);
        transform: scale(0.9);
        transition: 1.3s ease;
        border: none;
        //border-radius: 50%;
        position: relative;
        //overflow: hidden;
        //background Color shift
        background-image: (linear-gradient(270deg, #8e9ac2, #42579a));
        background-size: 400% 400%;
        animation: TransitioningBackground 3.5s ease infinite;
        //animation-iteration-count: 1;
        &::before {
            content: '';
            display: block;
            position: absolute;
            background: rgba(255, 255, 255, 0.5);
            width: 40px;
            height: 100%;
            top: 0;
            filter: blur(40px);
            transform: translateX(-100px) skewX(-20deg);
        }
        &::after {
            content: '';
            display: block;
            position: absolute;
            background: rgba(255, 255, 255, 0.2);
            width: 30px;
            height: 100%;
            top: 0;
            filter: blur(5px);
            transform: translateX(-100px) skewX(-15deg);
        }
        &::before, &::after {
            transform: translateX(300px) skewX(-15deg);
            transition: 0.7s;
        }
        @keyframes TransitioningBackground {
            0% {
                background-position: 1% 0%;
            }
            50% {
                background-position: 99% 100%;
            }
            100% {
                background-position: 1% 0%;
            }
        }

        img {
            transform: scale(2.3) translateY(-8px) translateX(-4px) skew(3.5deg);
            transition: 1.75s ease;
            -webkit-filter: drop-shadow(10px 10px 10px #929191);
            filter: drop-shadow(7px 7px 7px #696969);
            object-fit: cover;
        }
        h3 {
            transform: scale(2.5) translateY(-13px) skew(3deg);
            transition: 1.8s ease;
            color: whitesmoke;
            z-index: 0;
            font-weight: 400px;
            text-shadow: 
                1px 1px 1px #919191,
                1px 2px 1px #919191,
                1px 3px 1px #919191,
                1px 4px 1px #919191,
                1px 5px 1px #919191,
                1px 6px 1px #919191,
                1px 7px 1px #919191,
                1px 8px 1px #919191,
                1px 9px 1px #919191,
                1px 10px 1px #919191,
                1px 18px 6px rgba(16,16,16,0.4),
                1px 22px 10px rgba(16,16,16,0.2),
                1px 25px 35px rgba(16,16,16,0.2),
                1px 30px 60px rgba(16,16,16,0.4);
        }
    }
    
    img {
        object-fit: cover;
        width: 12vh;
        height: 12vh;
    }
    h3 {
        color: grey;
    }
`;

const Pagination = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    margin: 0.7rem;
    left: 44%;
    top: -1.8%;
`;

const Button = styled.button`
    outline: none;
    border: none;
    padding: 0.5rem;
    &:hover {
        background:gold;
        transition: 1s;
        transform: scale(1.1)
    }
`;

export default PokeList;

/*return (
    <>
    <List>
        {pokeData.map((data, id) => (
        <Link to={`/pokemon/${id+1}`} key={id}>
        <PokeContainer className='card'>
            <h3>{`${data.name}`}</h3>
            <h3>{`${data.url}`}</h3>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id+1}.png`} alt='pokemon' />
        </PokeContainer>
        </Link>
        ))}
    </List>
    <button onClick={prevPage}>Previous</button>
    <button onClick={nextPage}>Next</button>
    </>

        );*/