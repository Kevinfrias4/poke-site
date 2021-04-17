import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { listSlide } from '../animations'
import axios from 'axios';

const PokeList = ({ pokeData, nextPage, prevPage, setShowDetail, showDetails }) => {

    function showDet () {
        setShowDetail(!showDetails);
    };

    const history = useHistory();
    const[text, setText] = useState('')
    const[searched, setSearched] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const getPokemon = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118`);
            setSearched(res.data.results);
        }
        getPokemon()
        searched.map((data) => {
            if (text === data.name) {
                document.body.style.overflow = 'auto';
                history.push(`/${text}/${data.url.substring(34, data.url.length-1)}/${0}`);
                setShowDetail(!showDetails);
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

    return (
        <MainPage variants={listSlide} initial='hidden' animate='show'>
            <Pagination>
                <form onClick={handleSubmit} onSubmit={handleSubmit}>
                    <Input 
                        name="viewport" 
                        content="width=device-width, initial-scale=1, maximum-scale=1"
                        className='input'
                        type="text"
                        value={text}
                        placeholder='Search Pokemon'
                        onChange={handleChange}
                    />
                    <Input className='search' type="submit" onClick={handleSubmit} value='Search'/>
                </form>
                {prevPage && <Button className='button' onClick={prevPage}>Previous</Button>}
                {nextPage && <Button className='button' onClick={nextPage}>Next</Button>}
            </Pagination>
            <List>
                {pokeData.map((data, id) => (
                <Link to={`/${data.name}/${data.url.substring(34, data.url.length-1)}/${id}`} key={id} onClick={showDet}>
                    <PokeContainer className='card'>
                        <motion.h3>{`${data.name}`}</motion.h3>
                        <motion.img src={`https://pokeres.bastionbot.org/images/pokemon/${data.url.substring(34, data.url.length-1)}.png`} alt='pokemon' />
                    </PokeContainer>
                </Link>
                ))}
                {/*<img  className='back' src="https://wallup.net/wp-content/uploads/2017/11/17/238787-Pokemon-Pok%C3%A9balls-Pok%C3%A9dex.jpg" alt=""/> */}
            </List>
        </MainPage>
    );
}

const MainPage = styled(motion.div)`
    margin: 0rem;
    padding: 0rem;
    @media screen and (max-width: 768px) {
        background: #ffd890;
    }
`;

const List = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
    //400px
    grid-column-gap: 0rem;
    grid-row-gap: 0.1rem;
    a {
        cursor: default;
        text-decoration: none;
    }
    overflow-x: hidden;
    width: 100%;
    height: 97vh;
    margin-top: 1rem;
    //background: #ffffff;
    @media screen and (max-width: 768px) {
        background: #ffd890;
        height: 100%;
        width: 100%;
        justify-content: center;
        margin-left: 0rem;
        margin-top: 0rem;
        overflow-x: hidden;
        padding-bottom: 1rem;
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
    box-shadow: 0 3px 15px rgba(163, 163, 163, 0.5);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 35px;
    border-width: 5px;
    padding: 0rem 0rem 2rem 0rem;
    margin: 1rem 0rem 0rem 1.5rem;
    //overflow: hidden;
    background: #eeeded;
    //background: rgba( 205, 205, 205, 0.2);
    //box-shadow: 0 8px 12px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    //border: 2px solid rgba( 255, 255, 255, 0.18 );
    //background: linear-gradient(to bottom right, thistle, lightblue, white);
    &.card:hover {
        background: linear-gradient(to bottom right,hotpink, white, hotpink);
        transform: scale(0.9);
        transition: 1.6s ease;
        //border: none;
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
            cursor: pointer;
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
                //1px 8px 1px #919191,
                //1px 9px 1px #919191,
                //1px 10px 1px #919191,
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
    @media screen and (max-width: 768px) {
        position: relative;
        left: 0rem;
        margin: 0rem;
        .button {
            text-align: center;
            padding: 0rem;
            height: 33px;
            width: 2.5rem;
            margin: 0.1rem;
            margin-top: 0rem;
            justify-content: center;
            font-size: 10px;
            border-radius: 10px;
        }
        .input {
            width: 4rem;
            margin: 0.1rem;
            margin-top: 0rem;
            background: #e3f8ff;
            font-size: 10px;
        }
        .search {
            border-radius: 10px;

            width: 2.5rem;
            font-size: 10px;
        }
    }
`;

const Input = styled.input`
    outline: none;
    border: none;
    padding: 0.5rem;
    &:hover {
        background:gold;
        transition: 1s;
        transform: scale(1.1)
    }
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