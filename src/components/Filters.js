function Filters({searchName,handleFilter, searchSpecie, typeOfSpecies}) {
    const handleChangeSearchName = (ev) => {
        handleFilter('name', ev.target.value)
    }
    const handleChangeSearchSpecie = (ev) => {
        handleFilter('species', ev.target.value)
    }
    const renderSpecieOptions = () => {
        return typeOfSpecies.map((eachSpecie, index) =>
        <option key={index} value={eachSpecie}>{eachSpecie}</option>)
    }
    return(
        <form action="">
          <label htmlFor="">Busqueda por nombre: 
          <input type="text" name="seach_name"  id='search_name' value={searchName} onChange={handleChangeSearchName}/>
          </label>
          <label htmlFor="">Especie:
          <select name="seach_specie" id="search_specie" value={searchSpecie} onChange={handleChangeSearchSpecie}>
            {renderSpecieOptions()}
            <option value="all">Todas</option>
            {/* <option value="Human">Humano</option>
            <option value="Alien">Alien</option> */}
          </select>
          </label>
          </form>
    )
}
export default Filters;