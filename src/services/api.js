const getDataFromApi = () => {
    return(
        fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      const cleanData = data.results.map ((objetApi) =>{
        return{
          id: objetApi.id,
          name: objetApi.name,
          species: objetApi.species,
          status: objetApi.status,
          gender: objetApi.gender,
          image: objetApi.image,
        }
       
      });
      return(cleanData);
    })
    )
}
export default getDataFromApi;