import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters({searchName,handleFilter, searchSpecie, typeOfSpecies}) {
    return(
        <form action="">
         <FilterByName searchName={searchName} handleFilter={handleFilter}/>
        <FilterBySpecies searchSpecie={searchSpecie} handleFilter={handleFilter} typeOfSpecies={typeOfSpecies}/>
          </form>
    )
}
export default Filters;