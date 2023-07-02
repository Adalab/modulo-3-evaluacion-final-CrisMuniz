import getDataFromApi from '../services/api';
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Route, Routes } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import {useLocation, matchPath} from 'react-router';


function App() {
  // VARIABLES FUNCIONALES
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

  // SECCION FUNCIONES MANEJADORAS
  const handleFilter = (varName, varValue) => {
    if(varName === 'name'){
    setSearchName(varValue)
    }
    else if (varName === 'species') {
      setSearchSpecie(varValue)
    }
  }
    
// SECCION FILTRADO
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

  // OBTENER DATOS DEL PERSONAJE
  const {pathname} = useLocation();
  const routeData = matchPath('/character/:characterid', pathname);
  console.log(routeData)
  const characterId =routeData?.params.characterid;
  console.log(characterId);
  console.log(typeof(characterId))

  const characterData = characterList.find((char) => Number(char.id) === Number(characterId));
  console.log(characterData)

  // SECCION HTML
  return (
    <div>
      <header>
        <h1>Ricky and Morty</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<> <Filters searchName={searchName} handleFilter={handleFilter} searchSpecie={searchSpecie} typeOfSpecies={typeOfSpecies}/>
        <section>
         <CharacterList characterList={filteredCharacters}/>
        </section></>}/>
          <Route path='/character/:characterid' element={<CharacterDetail characterData={characterData}/>}/>
        </Routes>
       
      </main>
    </div>
  );
}

export default App;


