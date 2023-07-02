import { Link } from "react-router-dom";

function CharacterItem({eachCharacter}) {
    return(
    <Link to={"/character/"+eachCharacter.id}>
    <img className="list_img" src={eachCharacter.image} alt={`Foto de ${eachCharacter.name}`} />
    <h3>{eachCharacter.name}</h3>
    <p>{eachCharacter.gender}</p>
    <p>{eachCharacter.species}</p>
    <p>{eachCharacter.status}</p>
    </Link>
    )
}
export default CharacterItem;