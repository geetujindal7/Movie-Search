export const options = (search) => {
    // console.log(process.env.URL/search,process.env.apiKey, process.env.X_RapidAPI_Key, process.env.X_RapidAPI_Host , search)
    return ({
    method: 'GET',
    url: `https://actor-movie-api1.p.rapidapi.com/getid/${search}`,
    params: {
      apiKey: '62ffac58c57333a136053150eaa1b587'
    },
    headers: {
      'X-RapidAPI-Key': "764509eademsh39464646cc1b53ep154ca9jsnc80276461cfe",
      'X-RapidAPI-Host': "actor-movie-api1.p.rapidapi.com"
    }
   
})
  };