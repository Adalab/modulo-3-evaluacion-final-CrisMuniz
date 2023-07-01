import getDataFromApi from '../services/api';
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';


function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    getDataFromApi()
    .then(((cleanData) => {
      setCharacterList(cleanData);
      console.log(cleanData)
    }))
  },[])

  return (
    <div>
      <header>
        <h1>Ricky and Morty</h1>
      </header>
      <main>
        <form action="">
          <label htmlFor="">Busqueda por nombre: 
          <input type="text" name="seach_name"  id='search_name'/>
          </label>
        </form>
        <section>
         <CharacterList characterList={characterList}/>
        </section>
      </main>
    </div>
  );
}

export default App;


