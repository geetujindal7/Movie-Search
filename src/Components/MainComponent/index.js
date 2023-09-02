import { Box, Button, Typography } from '@mui/material'
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
    const timer = setInterval(nextSlide, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      <Box sx={{ height: "36rem" }}>
        {
          result?.results?.map((value, index) => (
            <>
              <Box>
                <Image style={{
                  background: `url(https://image.tmdb.org/t/p/original/${value.poster_path})`
                }} src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} width={800} height={500} alt="image" className={index === currentIndex ? `${styles.slide} ${styles.active} ${styles.mainImage}` : `${styles.slide}  ${styles.mainImage}`}
                />
              </Box>
              <Box key={value.overview} className={styles.typoHeader}>
                <Typography className={index === currentIndex ? `${styles.slide} ${styles.active} ${styles.movieName}` : `${styles.slide} ${styles.movieName}`}>{value?.title || value?.name}</Typography>
                <Typography className={index === currentIndex ? `${styles.slide} ${styles.active} ${styles.overview}` : `${styles.slide} ${styles.overview}`}>{value.overview}</Typography>
                <Link href={{
                  pathname: "trailer",
                  query: {
                    id: value.id,
                  }
                }}>
                  <button className={index === currentIndex ? `${styles.slide} ${styles.active} ${styles.watch}` : `${styles.slide} ${styles.watch}`}>Watch Now</button></Link>
              </Box>
            </>
          ))
        }
      </Box>
      <Box>
        <Image src="https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/kaalkoot_launch_03_cta-14x3-1690815691064.jpg?imformat=chrome" width={1200} height={200} alt="image" />
      </Box>
    </Box>
  )
}

export default MainComponent
