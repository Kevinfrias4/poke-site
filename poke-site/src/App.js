import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, useLocation } from 'react-router-dom';
//import components
import PokeList from './components/PokeList';
import Pokemon from './components/Pokemon';

function App() {
  
  const[pokeData, setPokeData] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const[nextPageUrl, setNextPageUrl] = useState();
  const[prevPageUrl, setPrevPageUrl] = useState();
  const[currPage, setCurrPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=9?offset=9');


  useEffect(() => {
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
        //console.log(data.results[0].name)
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
      <div>
        <h1>LOADING...</h1>
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${1}.png`} alt=""/>
      </div>
    )
  }
  
  return (
    <div>
      <Switch>
        <Route exact path={'/'} render={() => <PokeList nextPage={nextPageUrl ? nextPage : null} prevPage={prevPageUrl ? prevPage : null} pokeData={pokeData} />} />
        <Route path={['/pokemon/:pokemonId', '/']} render={() => <Pokemon location={location} pokeData={pokeData} pathId={pathId} />} />
      </Switch>
    </div>
  );
}

export default App;
