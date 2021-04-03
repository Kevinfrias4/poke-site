import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PokeList = ({pokeData}) => {
  return (
    <List>
        {pokeData.map((data, id) => (
        <Link to={`/pokemon/${data.name}`}>
          <PokeContainer className='card' key={data.name}>
            <h3>{`${data.name} ${id+1}`}</h3>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id+1}.png`} alt='pokemon' />
            <Link to={`/${data.name}`}></Link>
          </PokeContainer>
        </Link>
        ))}
    </List>
  );
}

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 0.5fr));
    grid-column-gap: 0rem;
    grid-row-gap: 1rem;
    a {
        text-decoration: none;
    }
`;

const PokeContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    border: solid #f79393;
    border-radius: 25px;
    padding: 0rem 0rem 1rem 0rem;
    margin: 0rem 0rem 0rem 2rem;
    //overflow: hidden;
    background: linear-gradient(to bottom right, thistle, lightblue, white);
    &.card:hover {
        background: linear-gradient(to bottom right, hotpink, white, hotpink);
        img {
            transform: scale(2.3) translateY(-8px) skew(3.5deg);
            transition: 2s ease;
            -webkit-filter: drop-shadow(10px 10px 10px #929191);
            filter: drop-shadow(7px 7px 7px #696969);
            object-fit: cover;
        }
        h3 {
            transform: scale(2) translateY(-13px) skew(3deg);
            transition: 2s ease;
            color: whitesmoke;
            z-index: 0;
            opacity: 0.9;
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

export default PokeList;