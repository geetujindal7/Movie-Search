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