import getDataFromApi from '../services/api';
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Route, Routes } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import {useLocation, matchPath} from 'react-router';
import ls from '../services/localStorage';
import imageHeader from '../images/rickandmortyglobe.jpeg';
import imageFooter from '../images/rickymorty_title.png'


function App() {
  // VARIABLES FUNCIONALES
  const [characterList, setCharacterList] = useState(ls.get('character', []));
  const [searchName, setSearchName] = useState('');
  const [searchSpecie, setSearchSpecie] = useState('all');

  useEffect(() => {
    if(ls.get('character', null) === null) {
    getDataFromApi()
    .then((cleanData) => {
      setCharacterList(cleanData);

      ls.set('character', cleanData)
    })
  }
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

  const characterId =routeData?.params.characterid;


  const characterData = characterList.find((char) => Number(char.id) === Number(characterId));


  // SECCION HTML
  return (
    <div>
      <header className='header'>
        <img className='header__img' src={imageHeader} alt="" />
      </header>
      <main className='main'>
        <Routes>

          <Route path='/' element={<> <Filters searchName={searchName} handleFilter={handleFilter} searchSpecie={searchSpecie} typeOfSpecies={typeOfSpecies} filteredCharacters={filteredCharacters}/>

        <section className='main__section2'>
         <CharacterList characterList={filteredCharacters}/>
        </section></>}/>
          <Route path='/character/:characterid' element={<CharacterDetail characterData={characterData}/>}/>
        </Routes>

      </main>
      <footer className='footer'>
         <img className='footer__img' src={imageFooter} alt="" /> 
      </footer>
    </div>
  );
}

export default App;


