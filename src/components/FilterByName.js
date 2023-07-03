function FilterByName({searchName, handleFilter, filteredCharacters}) {
    const handleChangeSearchName = (ev) => {
        ev.preventDefault();
        handleFilter('name', ev.target.value);
    }
    console.log(searchName);
    console.log(filteredCharacters);
    if(filteredCharacters.includes(searchName.value) ){
       
    return(
        <label htmlFor="">Busqueda por nombre:
        <input type="text" name="seach_name"  id='search_name' value={searchName} onChange={handleChangeSearchName}/>
        </label>
    )
    }
    else {
         return(<> <label htmlFor="">Busqueda por nombre:
         <input type="text" name="seach_name"  id='search_name' value={searchName} onChange={handleChangeSearchName}/>
         </label>
        <p>error</p></>)
    }
   
}
export default FilterByName;