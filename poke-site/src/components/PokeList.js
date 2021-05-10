import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { listSlide, navSlide } from '../animations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight, faArrowAltCircleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const PokeList = ({ pokeData, nextPage, prevPage, setShowDetail, showDetails }) => {

    const history = useHistory();
    const[text, setText] = useState('')
    const[holderText, setHolderText] = useState('Search Pokemon!')
    const[searched, setSearched] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const getPokemon = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118`);
            setSearched(res.data.results);
        }
        getPokemon()
        searched.map((data) => {
            if (text === data.name && text.length > 0) {
                document.body.style.overflow = 'auto';
                history.push(`/${text}/${data.url.substring(34, data.url.length-1)}/${0}`);
                setShowDetail(!showDetails);
                document.body.style.position = 'absolute';
                setHolderText('Pokemon Found!')
                setText('');
                //console.log(data.name);
            } else {
                console.log('not the searched pokemon')
            }
            return null;
        })
    }

    const handleChange = (e) => {
        setText(e.target.value.toLowerCase());
    }

    function showDet () {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        setShowDetail(!showDetails);
    };

    return (
        <MainPage>
            <Pagination variants={navSlide} initial='hidden' animate='show' >
                <form onClick={handleSubmit} onSubmit={handleSubmit}>
                    <Input 
                        name="viewport" 
                        fontSize="16px"
                        content="width=device-width, initial-scale=1, maximum-scale=1"
                        className='input'
                        type="text"
                        value={text}
                        placeholder={holderText}
                        onChange={handleChange}
                    />
                    <FontAwesomeIcon className='search' onClick={handleSubmit} color={'white'} icon={faSearch} />
                </form>
            </Pagination>
            <List variants={listSlide} initial='hidden' animate='show'>
                {pokeData.map((data, id) => (
                <Link to={`/${data.name}/${data.url.substring(34, data.url.length-1)}/${id}`} key={id} onClick={showDet}>
                    <PokeContainer className='card'>
                        <motion.h3>{`${data.name}`}</motion.h3>
                        <motion.img src={`https://pokeres.bastionbot.org/images/pokemon/${data.url.substring(34, data.url.length-1)}.png`} alt='pokemon' />
                    </PokeContainer>
                </Link>
                ))}
            </List>
            <Pagination2>
                {prevPage && <Button whileTap={{x: -60, scale:0.7}} className='button1' onClick={prevPage}><FontAwesomeIcon icon={faArrowAltCircleLeft}/></Button>}
                {nextPage && <Button whileTap={{x: 60, scale:0.7}} className='button2' onClick={nextPage}><FontAwesomeIcon icon={faArrowAltCircleRight}/></Button>}
            </Pagination2>
        </MainPage>
    );
}

const MainPage = styled(motion.div)`
    margin: 0rem;
    padding: 0rem;
    @media screen and (max-width: 768px) {
        //background: #ffd890;
        background: #ee8080;
    }
`;

const List = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
    grid-column-gap: 0rem;
    grid-row-gap: 0.1rem;
    a {
        cursor: default;
        text-decoration: none;
    }
    overflow-x: hidden;
    overflow-y: none;
    width: 100%;
    height: 100%;
    margin-top: 3.5rem;
    padding-bottom: 2.5rem;
    @media screen and (max-width: 768px) {
        background: #ffffff;
        //background: #d8f9ff;
        height: 100%;
        width: 100%;
        justify-content: center;
        margin-left: 0rem;
        margin-top: 0rem;
        overflow-x: hidden;
        padding-bottom: 2.5rem;
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
    }
`;

const PokeContainer = styled(motion.div)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 12px 0px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 35px;
    border-width: 5px;
    padding: 0rem 0rem 2rem 0rem;
    margin: 1.5rem 0rem 0rem 1.5rem;
    background: #eeeded;
    //box-shadow: 0 8px 12px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    &.card:hover {
        background: linear-gradient(to bottom right,hotpink, white, hotpink);
        transform: scale(0.9);
        transition: 1.6s ease;
        border-radius: 50%;
        position: relative;
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
            cursor: pointer;
        }
        h3 {
            font-family: 'Freckle Face', cursive;
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
                1px 5px 1px #7e7e7e,
                1px 18px 6px rgba(16,16,16,0.4),
                1px 22px 10px rgba(16,16,16,0.2),
                1px 25px 35px rgba(16,16,16,0.2),
                1px 30px 60px rgba(16,16,16,0.4);
        }
    }
    &:not(hover) {
        transition: 1.8s ease;
        img, h3 {
            transition: 0.4s ease;
        }
    }

    img {
        object-fit: cover;
        width: 12vh;
        height: 12vh;
    }
    h3 {
        letter-spacing: 2px;
        color: #b99898;
        font-family: 'Freckle Face', cursive;

    }
    @media screen and (max-width: 768px) {
        &:hover {
            pointer-events: none;
        }
        &:not(hover) {
            pointer-events: none;
        }
    }
`;

const Pagination = styled(motion.div)`
    display: flex;
    position: absolute;
    justify-content: center;
    margin: 0.7rem;
    margin-top: 0;
    margin-left: 0;
    width: 100%;
    top: -4.5%;
    padding: 0.7rem 0rem 0rem 0rem;
    background: #ee8080;
    input {
        width: 10rem;
        height: 1rem;
        border-radius: 0px 15px 15px 15px;
        margin: 1rem;
        margin-top: 2rem;
    }
    .search {
        color: lightblue;
        margin-left: 0.5rem;
        font-size: 30px;
        outline: none;
        &:hover{
            transform: scale(1.3);
            color: #fdec88;
            transition: 0.5s ease;
        }
    }
    @media screen and (max-width: 768px) {
        position: relative;
        width: 100%;
        left: 0rem;
        margin: 0rem;
        padding: 1rem 0rem 1rem 0rem;
        .input {
            -webkit-appearance: none;
            -webkit-border-radius: 0;
            width: 8.5rem;
            height: 1.5rem;
            margin: 0.1rem;
            margin-top: 0rem;
            background: #e3f8ff;
            font-size: 16px;
            border-radius: 0rem 15px 15px 15px;
        }
        .search {
            //-webkit-appearance: none;
            //-webkit-border-radius: 0;
            color: white;
            align-items: center;
            width: 4rem;
            transform: translateY(3px);
            -webkit-tap-highlight-color: transparent;
        }
    }
`;

const Input = styled.input`
    outline: none;
    border: none;
    padding: 0.5rem;
    &:hover {
        background:#ffeb7a;
        transition: 1s;
        transform: scale(1.1)
    }
`;

const Pagination2 = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    background: #ee8080;
`;

const Button = styled(motion.button)`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 6rem;
    outline: none;
    border: none;
    padding: 0.5rem;
    height: 50px;
    font-size: 30px;
    color: #fd6d6d;
    border-radius: 10px;
    margin: 0rem 1.5rem 2rem 1.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    &:hover {
        background:#91d7e0;
        color: white;
        transition: 0.25s;
    }
    &:not(hover) {
        transition: 0.25s;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        text-align: center;
        color: #fd6d6d;
        height: 60px;
        width: 6rem;
        margin: 0rem 1.5rem 2rem 1.5rem;
        margin-top: 0.5rem;
        justify-content: center;
        font-size: 40px;
        border-radius: 10px;
        background: #eeeeee;
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }
`;

export default PokeList;