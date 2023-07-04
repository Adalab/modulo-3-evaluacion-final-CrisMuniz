import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSkullCrossbones, faHeartPulse, faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";

function CharacterDetail({ characterData }) {
  const getIcon = () => {
    if(characterData.status === "Dead") {
      return <FontAwesomeIcon icon={faSkullCrossbones} />
    }
    else if (characterData.status === "Alive") {
      return <FontAwesomeIcon icon={faHeartPulse} />
    }
    else {
      return <FontAwesomeIcon icon={faPersonCircleQuestion} />;
    }
    
  }

  if (characterData) {
    return (
      <div>
        <section className="main__section3">
          <img
            className="main__section3--img"
            src={characterData.image}
            alt={characterData.name}
          />
          <h3 className="main__section3--h3">{characterData.name}</h3>
          <p className="main__section3--p1">Género:{characterData.gender}</p>
          <p className="main__section3--p2">Especie:{characterData.species}</p>
          <p className="main__section3--p3">Status:{characterData.status} {getIcon()}</p>
          <Link className="main__section3--link" to="/">
            Volver
          </Link>
        </section>
      </div>
    );
  } else {
    return (
      <>
        <p>Lo sentimos, ese personaje no existe</p>
        <Link to="/">Volver</Link>
      </>
    );
  }
}
export default CharacterDetail;
