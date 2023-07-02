import { Link } from "react-router-dom";

function CharacterDetail({characterData}) {
    if(characterData) {
    return(
        <div>
        <section>
        <img className="list_img" src={characterData.image} alt={characterData.name} />
        <h3>Nombre:{characterData.name}</h3>
        <p>Género:{characterData.gender}</p>
        <p>Especie:{characterData.species}</p>
        <p>Status:{characterData.status}</p>
        <Link to="/">Volver</Link>
        </section>
        </div>
    )
}
else{
    return(
        <>
        <p>Lo sentimos, ese personaje no existe</p>
        <Link to="/">Volver</Link>
        </>
    )
}
}
export default CharacterDetail;