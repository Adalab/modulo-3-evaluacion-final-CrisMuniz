import { Link } from "react-router-dom";

function CharacterItem({ eachCharacter }) {
  return (
    <Link to={"/character/" + eachCharacter.id}>
      <img
        className="main__section2--li--img"
        src={eachCharacter.image}
        alt={`Foto de ${eachCharacter.name}`}
      />
      <div className="main__section2--div">
        <h3 className="main__section2--li--h3">{eachCharacter.name}</h3>
        <p className="main__section2--li--p1">Género:{eachCharacter.gender}</p>
        <p className="main__section2--li--p2">
          Especie:{eachCharacter.species}
        </p>
        <p className="main__section2--li--p3">Status:{eachCharacter.status}</p>
      </div>
    </Link>
  );
}
export default CharacterItem;
