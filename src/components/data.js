import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      {characters.map(character => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
        </div>
      ))}
    </div>
  );
}

export default DataList;