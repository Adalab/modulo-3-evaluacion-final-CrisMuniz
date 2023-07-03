import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters({searchName, handleFilter, searchSpecie, typeOfSpecies, filteredCharacters}) {
    // console.log(searchName);
    // console.log(characterList);
    return(
        <form action="">
         <FilterByName searchName={searchName} handleFilter={handleFilter} filteredCharacters={filteredCharacters}/>
        <FilterBySpecies searchSpecie={searchSpecie} handleFilter={handleFilter} typeOfSpecies={typeOfSpecies}/>
          </form>
    )
}
export default Filters;