import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import styles from "@/styles/search.module.css"
import { useSelector } from 'react-redux'
import Loading from '@/pages/loading'
import NoData from '../../pages/404'
import { AppContext } from '../AppContext'
import Link from 'next/link'


function ActorItems({ search }) {

  const filter = useSelector((state) => state.searchApi.state)
  const [data, setData] = useState(filter)
  const [loading, setLoading] = useState(true)
  const [followed, setFollowed] = useState(false)
  console.log(!filter?.error, filter?.length !== 0)
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
          <Box className={styles.Image_Header}>
            <Image style={{ borderRadius: "15px", opacity: "0.5" }} src={`https://image.tmdb.org/t/p/original/${filter?.[0]?.backdrop_path || filter?.[0]?.poster_path}`} width={835} height={350} alt="actor image" />
            <Box className={styles.name_container}>
              <Typography className={styles.name}>{search}</Typography>
              <button className={styles.follow} onClick={() => handleFollow(search, followed)}>{followed ? "Unfollow" : "Follow"}</button>
            </Box>
          </Box>

          <Typography className={styles.movie_header}>Movies</Typography>
          <Box className={styles.cardContainer}>
            {data?.map((e, key) => (
              <Link key={key} href={`/search/detail/${e.id}`}>
                <Box className={styles.card}>
                  <Image style={{ borderRadius: "21px", opacity: "0.5" }} src={e.poster_path ? `https://image.tmdb.org/t/p/w500/${e.poster_path}` : "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="} alt="poster_path" width={320} height={200} />
                  <Typography className={styles.title}>{e.title}</Typography>
                </Box>
              </Link>
            ))}
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
