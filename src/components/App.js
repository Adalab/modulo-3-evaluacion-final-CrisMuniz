import getDataFromApi from '../services/api';
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';


function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecie, setSearchSpecie] = useState('all');

  useEffect(() => {
    getDataFromApi()
    .then(((cleanData) => {
      setCharacterList(cleanData);
      console.log(cleanData)
    }))
  },[])

  const handleFilter = (varName, varValue) => {
    if(varName === 'name'){
    setSearchName(varValue)
    }
    else if (varName === 'species') {
      setSearchSpecie(varValue)
    }
  }
    

  const filteredCharacters = characterList
  .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchName.toLocaleLowerCase()))
  .filter((eachCharacter) => {
    if(searchSpecie === 'all'){
      return true;
    }
    else {
      return eachCharacter.species === searchSpecie;
    }
  })
  const typeOfSpecies = characterList.map((eachCharacter) => eachCharacter.species)

  return (
    <div>
      <header>
        <h1>Ricky and Morty</h1>
      </header>
      <main>
        <Filters searchName={searchName} handleFilter={handleFilter} searchSpecie={searchSpecie} typeOfSpecies={typeOfSpecies}/>
        <section>
         <CharacterList characterList={filteredCharacters}/>
        </section>
      </main>
    </div>
  );
}

export default App;


