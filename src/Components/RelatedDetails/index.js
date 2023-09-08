import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '@/Components/RelatedDetails/Related.module.css'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

function RelatedDetails({ data }) {
  const filter = useSelector((state) => state.searchApi.state)
  const [selected, setSelected] = useState("Related")

  return (
    <>
      <Box sx={{ display: "flex", gap: "30px", justifyContent: "center", marginTop: "10px" }}>
        <Typography variant="h1" className={selected === "Related" && `${styles.related} ${styles.active}` } onClick={() => setSelected("Related")}>Related</Typography>
        <Typography variant="h1" className={selected === "Details" && `${styles.active}`} onClick={() => setSelected("Details")}>Details</Typography>
      </Box>
      <Box>
        {
          selected === "Related" ? (
            <>
              <Typography variant="h5" sx={{
                padding: "1px 25px 15px 29px",
              }}>Customers also watched</Typography>
              <Box sx={{ display: "flex", overflow: "scroll", gap: "2rem", padding: "5px 29px 3rem 29px" }}>
                {
                  filter && filter?.slice(0, 15).map((val, key) => (
                    <Box key={key}>
                    <Link  href={`/search/detail/${val.id}`}>
                      <Image style={{ borderRadius: "8px", opacity: "12" }} src={`https://image.tmdb.org/t/p/original/${val?.poster_path}`} alt="values" width={350} height={250} />
                      </Link>
                    </Box>
                  ))
                }
              </Box>

            </>
          ) : (
            <>
              <Box sx={{ padding: "3rem 6rem" }}>
                <Typography variant="h5" className={styles.heading}>More Info</Typography>
                <Box className = {styles.container}>
                  <Typography variant="h5" className={styles.heading}>Title</Typography>
                  <Typography variant="h3" className={styles.detail}>{data[0].original_title}</Typography>
                </Box>
                <Box className = {styles.container}>
                  <Typography variant="h5" className={styles.heading}>Info</Typography>
                  <Typography variant="h3" className={styles.detail}>{data[0].overview}</Typography>
                </Box>
                <Box className = {styles.container}>
                  <Typography variant="h5" className={styles.heading}>Language</Typography>
                  <Typography variant="h3" className={styles.detail}>English (US) [CC], हिन्दी, தமிழ், తెలుగు, Deutsch, English (Australia), Español (Latinoamérica), Español (España), Français (Canada), Français (France), Italiano, 日本語, Nederlands, Polski, Português, Svenska</Typography>
                </Box>
                <Box className = {styles.container}>
                  <Typography variant="h5" className={styles.heading}>Release Date</Typography>
                  <Typography variant="h3" className={styles.detail}>{data[0].release_date}</Typography>
                </Box>
                <Box className = {styles.container}>
                  <Typography variant="h5" className={styles.heading}>IMDB</Typography>
                  <Typography variant="h3" className={styles.detail}>{data[0].vote_average.toFixed(1)}/10</Typography>
                </Box>
              </Box>
            </>
          )
        }
      </Box>
    </>
  )
}

export default RelatedDetails