import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const options = (search) => {
  return {
    method: "GET",
    url: `https://actor-movie-api1.p.rapidapi.com/getid/${search}`,
    params: {
      apiKey: publicRuntimeConfig.API_KEY,
    },
    headers: {
      "X-RapidAPI-Key": publicRuntimeConfig.X_RapidAPI_Key,
      "X-RapidAPI-Host": publicRuntimeConfig.X_RapidAPI_Host,
    },
  };
};

export const movie = (search) => {
  return {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: { query: search, include_adult: "false", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };
};

export const tvSearch = (search) => {
  return {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/tv",
    params: { query: search, include_adult: "false", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };
};

export const comingSoon = (id, genre, page) => {
  return {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      page: page,
      "primary_release_date.gte": "2023-09-09",
      "primary_release_date.lte": "2024-12-09",
      sort_by: "popularity.desc",
      // with_origin_country: 'IN',
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };
};

export const randomMovie = (l, lists) => {
  return {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "hi", page: l,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };
};

export const keyword = (search) => {
  return {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/keyword",
    params: { query: search },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };
};

export const Popular = (page) => {
  return {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "hi", page: page, with_origin_country: 'IN',},
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };
};

export const airTodayModal = (page) => {
  return {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv",
    params: {
      page: page,
      'first_air_date.gte': '2019-01-24',
    include_adult: 'false',
    include_null_first_air_dates: 'false',
    language: 'hi',
    sort_by: 'primary_release_date.asc',
    with_origin_country: 'IN'
      // // with_origin_country: 'IN',
      //  with_original_language: 'hi'
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };
};

export const onAir = (page) => {
  return {
    method: "GET",
    url: 'https://api.themoviedb.org/3/discover/tv',
    params: {
      'first_air_date.gte': '2022-01-10',
      'first_air_date.lte': '2023-08-08',
      include_adult: 'false',
      include_null_first_air_dates: 'false',
      page: page,
      sort_by: 'primary_release_date.asc',
      with_original_language: 'hi'
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };
};

export const topRatedSeries = (page) => {
  return ({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/top_rated',
    params: {
      page: page, 'first_air_date.gte': '2019-01-24',
      'first_air_date.lte': '2022-10-21',
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
    }
  })
}

export const episodeDetails = (season, id) => {
  return ({
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${id}/season/${season}`,
    params: {},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
    }
  })
}

export const punjabi = (page) => {
  return ({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      page: page,
      'primary_release_date.gte': '2012-01-01',
      'primary_release_date.lte': '2020-12-09',
      sort_by: 'popularity.desc',
      with_original_language: 'pa'
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
    }
  })
}