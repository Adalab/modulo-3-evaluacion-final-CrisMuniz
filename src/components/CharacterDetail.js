import { Link } from "react-router-dom";

function CharacterDetail({ characterData }) {
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
          <p className="main__section3--p3">Status:{characterData.status}</p>
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
