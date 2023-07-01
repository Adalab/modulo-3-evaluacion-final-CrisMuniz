function CharacterItem({eachCharacter}) {
    return(
    <>
    <img className="list_img" src={eachCharacter.image} alt={`Foto de ${eachCharacter.name}`} />
    <h3>{eachCharacter.name}</h3>
    <p>{eachCharacter.gender}</p>
    <p>{eachCharacter.species}</p>
    <p>{eachCharacter.status}</p>
    </>
    )
}
export default CharacterItem;