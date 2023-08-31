import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import styles from "@/styles/search.module.css"
import { useSelector } from 'react-redux'
import Loading from '@/pages/loading'
import NoData from '../../pages/404'
import { AppContext } from '../AppContext'
import Link from 'next/link'
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import axios from 'axios'
import Router from 'next/router'

function ActorItems({ search }) {

  const filter = useSelector((state) => state.searchApi.state)
  const [data, setData] = useState(filter)
  const [loading, setLoading] = useState(true)
  const [followed, setFollowed] = useState(false)
  const { follow, handleFollow } = useContext(AppContext)
  const [actordetails, setActorDetails] = useState()
  const [error, setError] = useState()

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/person/${filter[0]?.actorId}`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
      }
    };

  axios
  .request(options)
  .then(function (response) {
    setActorDetails(response.data)
  })
  .catch(function (error) {
    setError(error)
  });
  }

  useEffect(() => {
    if (filter) {
      setData(filter)
        fetchData()
    }
  }, [filter])

  useEffect(() => {
    if(actordetails || error)
    {
      setLoading(false)
    }
  }, [actordetails, error])

  useEffect(() => {
    setFollowed(follow.includes(search));
  }, [follow, search])

  return (
    <>
      {loading ? (<Box><Loading /></Box>) : ((!filter?.error && filter?.length > 1 && !error)  ? (
        <Box>
          <Box className={styles.Image_Header}>
            <Image style={{ opacity: "0.5" }} src={`https://image.tmdb.org/t/p/original/${actordetails?.profile_path || filter[0].poster_path}`} width={635} height={350} alt="actor image" />
            <Box className={styles.name_container}>
              <Typography className={styles.name}>{actordetails?.name} ({actordetails?.also_known_as[0] || actordetails?.name})</Typography>
              {
                actordetails?.biography && (<>
                  <Typography className={styles.actorDetail}>{actordetails?.biography.slice(0, 340)}{actordetails?.biography?.length > 350 && `...` }</Typography>
                  <Typography className={styles.actorDetail}>Birth: {actordetails?.birthday}</Typography>
                  <Typography className={styles.actorDetail}>{actordetails?.place_of_birth}</Typography>
                </>)

              }
              <Button style={{
                color: "white",
                borderColor: "white",
                marginTop: "20px"
              }} variant="outlined" onClick={() => handleFollow(search, followed)}>{followed ? "Unfollow" : "Follow"}</Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", marginLeft: "18px" }}>            
              <KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem", marginTop: "1rem" }} />
            <Typography className={styles.movie_header}>Movies</Typography>
          </Box>
          <Box className={styles.cardContainer}>
            <Box className={styles.card}>

              {data?.map((e, key) => (
                <Link key={key} href={`/search/detail/${e.id}`}>
                  {(e.poster_path || e.backdrop_path) && (<>
                    <Image style={{ borderRadius: "8px", opacity: "0.5" }} src={`https://image.tmdb.org/t/p/w500/${e.poster_path || e.backdrop_path}`} alt="poster_path" width={320} height={200} />
                    <Typography className={styles.title}>{e.title}</Typography>
                  </>)}

                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box><NoData /></Box>
      ))
      }
    </>
  )
}

export default ActorItems
