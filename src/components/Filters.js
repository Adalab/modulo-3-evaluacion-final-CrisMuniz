import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters({
  searchName,
  handleFilter,
  searchSpecie,
  typeOfSpecies,
  filteredCharacters,
}) {
  return (
    <section className="main__section1">
      <form className="main__section1--form" action="">
        <FilterByName
          searchName={searchName}
          handleFilter={handleFilter}
          filteredCharacters={filteredCharacters}
        />
        <FilterBySpecies
          searchSpecie={searchSpecie}
          handleFilter={handleFilter}
          typeOfSpecies={typeOfSpecies}
        />
      </form>
    </section>
  );
}
export default Filters;
