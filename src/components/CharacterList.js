import CharacterItem from "./CharacterItem";
function CharacterList({characterList}) {
    const htmlLi = characterList.map((eachcharacter) => (
        <li className="list" key={eachcharacter.id}>
          <CharacterItem eachCharacter={eachcharacter}/>
        </li>
    ));
    console.log(htmlLi)
    return (
        <ul>
       {htmlLi}
      </ul>
    )
}
export default CharacterList;