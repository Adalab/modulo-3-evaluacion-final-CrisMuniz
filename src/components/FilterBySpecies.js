function FilterBySpecies({searchSpecie, handleFilter, typeOfSpecies}) {
    const handleChangeSearchSpecie = (ev) => {
        handleFilter('species', ev.target.value)
    }
    const renderSpecieOptions = () => {
        // Creo un nuevo array para hacer que no se me dupliquen las especies cuando hago el map.Para ello utilizo el metodo Set.
        const newArr = new Set(typeOfSpecies);
        let result = [...newArr];
        return result.map((eachSpecie,id) =>(
        <option key={id} value={eachSpecie}>{eachSpecie}</option>
        ));
    }

    return(
        <label htmlFor="">Especie:
        <select name="seach_specie" id="search_specie" value={searchSpecie} onChange={handleChangeSearchSpecie}>
          {renderSpecieOptions()}
          <option value="all">Todas</option>
          {/* <option value="Human">Humano</option>
          <option value="Alien">Alien</option> */}
        </select>
        </label>
    )
}
export default FilterBySpecies;