import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
//import components
import PokeList from './components/PokeList';
import Pokemon from './components/Pokemon';
import { motion } from 'framer-motion';

function App() {
  
  const[pokeType, setPokeType] = useState('')
  const[pokeData, setPokeData] = useState([]);
  const[showDetail, setShowDetail] = useState(false)
  const[isLoading, setIsLoading] = useState(true);
  const[nextPageUrl, setNextPageUrl] = useState();
  const[prevPageUrl, setPrevPageUrl] = useState();
  const[currPage, setCurrPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=9?offset=9');
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];


  useEffect((pathId) => {
    const fetchData = async () => {
      setIsLoading(true)
      let cancel
      try {
        const response = await axios.get(currPage, {
          cancelToken: new axios.CancelToken(c => cancel = c)
        });
        const data = response.data;
        console.log(data)
        setNextPageUrl(data.next)
        setPrevPageUrl(data.previous)
        setPokeData(data.results);
        //console.log(res)
      } catch(err) {
        console.log(err)
      }
      setIsLoading(false);
      return () => cancel();
    }

    setTimeout(() => {
      fetchData();
    }, 2000);

  }, [currPage])

  function nextPage() {
    setCurrPage(nextPageUrl);
  }

  function prevPage() {
    setCurrPage(prevPageUrl)
  }

  if (isLoading) {
    return (
      <Loading>
        <motion.img 
          animate={{
            //scale: [1, 1.7, 1.7, 1, 1],
            //scale: [1.2, 1.75, 1.75, 0.5, 0.7],
            //scale: [0.7, 0.5, 1.75, 1.75, 0],
            scale: [0, 1.75, 1.75, 0.5, 4.5],
            rotate: [0, 0, 270, 270, 0],
            opacity: [1, 1, 1, 0.85, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1
          }}
          //https://iconape.com/wp-content/png_logo_vector/pokeball-logo.png
          src='https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-hd-png-5.png' alt='' />
        {/*<img src={`https://pokeres.bastionbot.org/images/pokemon/${1}.png`} alt=""/>*/}
      </Loading>
    )
  }

  return (
    <div>
      <Route path={'/'} render={() => <PokeList nextPage={nextPageUrl ? nextPage : null} setShowDetail={setShowDetail} prevPage={prevPageUrl ? prevPage : null} pokeData={pokeData} pokeType={pokeType} />} />
      <Route path={['/pokemon/:pokemonId', '/']} render={() => <Pokemon location={location} setShowDetail={setShowDetail} showDetail={showDetail} pokeData={pokeData} pathId={pathId} pokeType={pokeType} setPokeType={setPokeType}/>} />
    </div>
  );
}

const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  img {
    position: absolute;
    margin-top: 10rem;
    object-fit: cover;
  }
`;

export default App;

/*
return (
  <div>
    <Switch>
      <Route exact path={'/'} render={() => <PokeList nextPage={nextPageUrl ? nextPage : null} prevPage={prevPageUrl ? prevPage : null} pokeData={pokeData} />} />
      <Route path={['/pokemon/:pokemonId', '/']} render={() => <Pokemon location={location} pokeData={pokeData} pathId={pathId} pokeType={pokeType} />} />
    </Switch>
  </div>
);*/