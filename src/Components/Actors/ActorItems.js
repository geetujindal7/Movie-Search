import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import styles from "@/styles/search.module.css"
import { useSelector } from 'react-redux'
import Loading from '@/pages/loading'
import NoData from '../../pages/404'
import { AppContext } from '../AppContext'


function ActorItems({ search }) {

  const filter = useSelector((state) => state.searchApi.state)
  const [data, setData] = useState(filter)
  const [loading, setLoading] = useState(true)
  const [followed, setFollowed] = useState(false)
  console.log(!filter?.error , filter?.length !== 0)
  const { follow, handleFollow } = useContext(AppContext)

  useEffect(() => {
    if (filter) {
      setData(filter)
      setLoading(false)
    }
  }, [filter])


  useEffect(() => {
    setFollowed(follow.includes(search));
  }, [follow, search])
  
  return (
    <>
      {loading ? (<Box><Loading /></Box>) : (!filter?.error && filter?.length !== 0 ? (
        <Box>
          <Image src={`https://image.tmdb.org/t/p/original/${filter?.[0]?.backdrop_path || filter?.[0]?.poster_path}`} width={1500} height={500} alt="actor image" />
          <Box className={styles.name_container}>
            <Typography className={styles.name}>{search}</Typography>
            <button className={styles.follow} onClick={() => handleFollow(search, followed)}>{followed ? "Unfollow" : "Follow"}</button>
          </Box>
          <hr></hr>
          <Typography className={styles.movie_header}>Movies</Typography>
          <Box className={styles.cardContainer}>
            {data?.map((e, key) => (
              <Box key={key} className={styles.card}>
                <Image src={e.poster_path ? `https://image.tmdb.org/t/p/w500/${e.poster_path}` : "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="} alt="poster_path" width={400} height={300} />
                <Typography className={styles.title}>{e.title}</Typography>
                <Typography className={styles.overview}>{`${e.overview.slice(0, 200)}${e.overview.length > 200 ? "..." : " "}`}</Typography>
                <Typography className={styles.date}>Release Date: {e.release_date}</Typography>
                <Typography className={styles.date}>Average Rating: {e.vote_average}/10</Typography>
              </Box>
            ))}
          </Box>
        </Box>) : (
        <Box><NoData /></Box>
      ))
      }
    </>
  )
}

export default ActorItems
