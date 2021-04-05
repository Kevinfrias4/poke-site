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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`);
        const data = response.data;
        console.log(data)
        setPokeData(data.results);
        setIsLoading(false);
      } catch(err) {
        console.log(err)
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000)
  }, [])

  if (isLoading) {
    return (
      <div>
      <h1>LOADING...</h1>
      <img src={`https://pokeres.bastionbot.org/images/pokemon/${2}.png`} alt=""/>
      </div>
    )
  }
  
  return (
    <div>
      <Switch>
        <Route exact path={'/'} render={() => <PokeList pokeData={pokeData} />} />
        <Route path={['/pokemon/:pokemonId', '/']} render={() => <Pokemon pokeData={pokeData} pathId={pathId} />} />
      </Switch>
    </div>
  );
}

export default App;
