// import { type } from "@testing-library/user-event/dist/type";

function FilterByName({ searchName, handleFilter, filteredCharacters }) {
  const handleChangeSearchName = (ev) => {
    ev.preventDefault();
    handleFilter("name", ev.target.value);
  };

  if (Object.keys(filteredCharacters).length !== 0) {
    return (
      <>
        {" "}
        <label className="main__section1--form--label" htmlFor="">
          Busqueda por nombre:
          <input
            className="main__section1--form--input"
            type="text"
            name="seach_name"
            id="search_name"
            value={searchName}
            onChange={handleChangeSearchName}
          />
        </label>
      </>
    );
  } else {
    return (
      <>
        {" "}
        <label className="main__section1--form--label" htmlFor="">
          Busqueda por nombre:
          <input
            className="main__section1--form--input"
            type="text"
            name="seach_name"
            id="search_name"
            value={searchName}
            onChange={handleChangeSearchName}
          />
          <p className="main__section1--form--error">
            No hay ningun personaje que coincida con ese nombre
          </p>
        </label>
      </>
    );
  }
}
export default FilterByName;
