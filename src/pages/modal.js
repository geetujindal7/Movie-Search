import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();


export const options = (search) => {
    return ({
    method: 'GET',
    url: `https://actor-movie-api1.p.rapidapi.com/getid/${search}`,
    params: {
      apiKey: publicRuntimeConfig.API_KEY
    },
    headers: {
      'X-RapidAPI-Key': publicRuntimeConfig.X_RapidAPI_Key,
      'X-RapidAPI-Host': publicRuntimeConfig.X_RapidAPI_Host
    }
})
  };

export const movie = (search) =>  {
  return ({
    method: 'GET',
    url: `https://cinema-api.p.rapidapi.com/get_ids/${search}/movies`,
    headers: {
      'X-RapidAPI-Key': '764509eademsh39464646cc1b53ep154ca9jsnc80276461cfe',
      'X-RapidAPI-Host': 'cinema-api.p.rapidapi.com'
    }})
  };
  