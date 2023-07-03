function FilterByName({searchName, handleFilter, filteredCharacters}) {
    const handleChangeSearchName = (ev) => {
        ev.preventDefault();
        handleFilter('name', ev.target.value);
    }
    console.log(filteredCharacters.includes(searchName.value))
    console.log(typeof(filteredCharacters))

    if(filteredCharacters.includes(searchName.value) ){

    return(
        <label className="main__section1--form--label" htmlFor="">Busqueda por nombre:
        <input className="main__section1--form--input" type="text" name="seach_name"  id='search_name' value={searchName} onChange={handleChangeSearchName}/>
        </label>
    )
    }
    else {
         return(<> <label className="main__section1--form--label" htmlFor="" >Busqueda por nombre:
         <input className="main__section1--form--input" type="text" name="seach_name"  id='search_name' value={searchName} onChange={handleChangeSearchName}/>
         <p className="main__section1--form--error">error</p>
         </label>
        </>)
    }
   
}
export default FilterByName;