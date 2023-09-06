// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import MainComponent from '@/Components/MainComponent'
import React, { lazy, Suspense } from 'react';
import Upcoming from '@/Components/Upcoming'
import { airToday, ComingSoon, onAirAction, PopularAPI, punjabiAction, randomMov, topRatedSeriesAction } from '@/Redux/actions'
import { Box } from '@mui/material'
import axios from 'axios';
// import styles from '@/styles/Home.module.css'

function Home({ result }) {

  return <>
    <Box>
      <MainComponent result={result} />
      <Upcoming comingSoon={"comingSoon"} ComingSoon={ComingSoon} title={"Coming Soon"} />
      <Upcoming comingSoon={"random"} ComingSoon={randomMov} title={"Favourite"} />
      <Upcoming comingSoon={"popular"} ComingSoon={PopularAPI} title={"Popular"} />
      <Upcoming comingSoon={"punjabi"} ComingSoon={punjabiAction} title={"Punjabi Movies"} />
      <Upcoming comingSoon={"Series"} ComingSoon={airToday} title={"Series"} />
      <Upcoming comingSoon={"topRatedSeries"} ComingSoon={topRatedSeriesAction} title={"Top Rated Series"} />
      <Upcoming comingSoon={"onAir"} ComingSoon={onAirAction} title={"Old Series"} />
    </Box>
  </>
}

export async function getServerSideProps() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/all/day',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
    }
  };

  const response = await axios.request(options);
  const result = response.data
  // const result = await response.text();
  return {
    props: {
      result,
    },
  };
}

export default Home