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
    url: 'https://api.themoviedb.org/3/search/movie',
    params: { query: search, include_adult: 'false', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
    }
  })
};

export const comingSoon = (l, genre = "Crime", page = "2", year = '2023') => {
  return ({
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    params: {
      year: year,
      limit: l,
      genre: genre,
      page: page
    },
    headers: {
      'X-RapidAPI-Key': '764509eademsh39464646cc1b53ep154ca9jsnc80276461cfe',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  })
};


export const randomMovie = (l, lists) => {
  return ({
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
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

export const keyword = (search) => {
  return ({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/keyword',
    params: { query: search },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
    }
  })
}

export const Popular = (page) => {
  return ({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    params: { language: 'hi', page: page },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
    }
  })
}