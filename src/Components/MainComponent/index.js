import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "./slider.module.css"
import Link from 'next/link';

function MainComponent({ result }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === result.results.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Automatically advance to the next slide every 10 seconds
    const timer = setInterval(nextSlide, 2000); // 10,000 milliseconds = 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Box sx={{ marginTop: "-80px" }}>
        {
          result?.results?.map((value, index) => (
            <>
              <Box key={value.overview} sx={{
                position: "relative",
                top: "27rem",
                left: "5vw",
                display: "inline"
              }}
              >
                <Typography style={{
                  fontSize: "2.5rem",
                  color: "azure",
                  zIndex: "10",
                  position: "relative",
                  fontStyle: "oblique",
                  fontFamily: "emoji",
                  fontWeight: "bold",
                  textTransform: "uppercase"
                }} className={index === currentIndex ? `${styles.slide} ${styles.active}` : `${styles.slide}`}>{value?.title || value?.name}</Typography>
                <Typography sx={{
                  wordWrap: "break-word",
                  width: "80%"
                }} className={index === currentIndex ? `${styles.slide} ${styles.active}` : `${styles.slide}`}>{value.overview}</Typography>
              </Box>
              <Link href={{
                pathname: "trailer",
                query: {
                  id: value.id,
                }
              }}>

                <Box sx={{
                  display: "flex",
                  background: "linear-gradient(180deg, rgb(0 0 0) 15%, rgb(0 0 0) 42%, rgb(0 0 0) 102%);",
                  width: "100%",
                  justifyContent: "center"
                }}>
                  <Image style={{
                    opacity: "0.3", borderRadius: "2%", background: `url(https://image.tmdb.org/t/p/original/${value.poster_path})`,
                    /* padding-left: 128pc; */
                    /* padding-bottom: 29pc; */
                    padding: "17pc",
                    clip: "rect(50px,275px,198px,142px)",
                    /* left: -60px; */
                    /* object-fit: cover; */
                    backgroundSize: "90pc 50pc",
                    backgroundRepeat: "no-repeat"
                  }} src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} width={800} height={500} alt="image" className={index === currentIndex ? `${styles.slide} ${styles.active}` : `${styles.slide}`}
                  />
                </Box>
              </Link>

            </>
          ))
        }
      </Box>
      <Box sx={{ marginTop: "3rem" }}>
        <Image src="https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/kaalkoot_launch_03_cta-14x3-1690815691064.jpg?imformat=chrome" width={1200} height={200} alt="image" />
      </Box>

    </>
  )
}

export default MainComponent
