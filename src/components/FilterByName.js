function FilterByName({searchName, handleFilter}) {
    const handleChangeSearchName = (ev) => {
        handleFilter('name', ev.target.value)
    }
    return(
        <label htmlFor="">Busqueda por nombre:
        <input type="text" name="seach_name"  id='search_name' value={searchName} onChange={handleChangeSearchName}/>
        </label>
    )
}
export default FilterByName;