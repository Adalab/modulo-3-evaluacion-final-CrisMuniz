import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSkullCrossbones, faHeartPulse, faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";

function CharacterItem({ eachCharacter,}) {
  const getIcon = () => {
    if(eachCharacter.status === "Dead") {
      return <FontAwesomeIcon icon={faSkullCrossbones} />
    }
    else if (eachCharacter.status === "Alive") {
      return <FontAwesomeIcon icon={faHeartPulse} />
    }
    else {
      return <FontAwesomeIcon icon={faPersonCircleQuestion} />;
    }
    
  }
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
         <p className="main__section2--li--p3">Status:{eachCharacter.status} {getIcon()}</p> 
         
        
      </div>
    </Link>
  );
}
export default CharacterItem;
