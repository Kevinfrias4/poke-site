import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeList from './components/PokeList';
import { Switch, Route } from 'react-router-dom';

function App() {

  const[pokeData, setPokeData] = useState();
  const[isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1130');
        const data = response.data;
        setPokeData(data.results);
      } catch(err) {
        console.log(err)
      }
      setIsLoading(false)
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div>
      <Switch>
        <Route exact path={'/'} render={() => <PokeList pokeData={pokeData} />} />
      </Switch>
    </div>
  );
}

export default App;
