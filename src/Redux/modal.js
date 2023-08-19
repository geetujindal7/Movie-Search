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

export const movie = (search) => {
  return ({
    method: 'GET',
    url: `https://cinema-api.p.rapidapi.com/get_ids/${search}/movies`,
    headers: {
      'X-RapidAPI-Key': '764509eademsh39464646cc1b53ep154ca9jsnc80276461cfe',
      'X-RapidAPI-Host': 'cinema-api.p.rapidapi.com'
    }
  })
};

export const comingSoon = (l, genre= "Romance", page = "1", year='2023') => {
  return ({
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    params: {
      year: year,
      limit: l,
      genre: genre,
      page : page
    },
    headers: {
      'X-RapidAPI-Key': '764509eademsh39464646cc1b53ep154ca9jsnc80276461cfe',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  })
};


export const randomMovie = (l, lists = "most_pop_movies") => {
  return ({
    method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
  params: {
    limit: l,
    list: lists
  },
  headers: {
    'X-RapidAPI-Key': '764509eademsh39464646cc1b53ep154ca9jsnc80276461cfe',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
})
}
