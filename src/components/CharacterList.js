import CharacterItem from "./CharacterItem";
function CharacterList({ characterList, logoHeart, logoDied }) {
  const htmlLi = characterList.map((eachcharacter) => (
    <li className="main__section2--li" key={eachcharacter.id}>
      <CharacterItem eachCharacter={eachcharacter} logoDied={logoDied} logoHeart={logoHeart}/>
    </li>
  ));
  return <ul className="main__section2--ul">{htmlLi}</ul>;
}
export default CharacterList;
