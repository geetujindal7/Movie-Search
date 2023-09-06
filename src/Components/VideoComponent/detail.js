import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "@/Components/RelatedDetails/Related.module.css";

function Detail({ resultData, actors }) {
  console.log(resultData);
  return (
    <Box>
      <Box sx={{ padding: "3rem 6rem" }}>
        <Typography className={styles.heading}>More Info</Typography>
        <Box className={styles.container}>
          <Typography className={styles.heading}>Title</Typography>
          <Typography className={styles.detail}>
            {resultData?.original_name}
          </Typography>
        </Box>
        <Box className={styles.container}>
          <Typography className={styles.heading}>Info</Typography>
          <Typography className={styles.detail}>
            {resultData?.overview}
          </Typography>
        </Box>

        <Box className={styles.container}>
          <Typography className={styles.heading}>IMDB</Typography>
          <Typography className={styles.detail}>
            {resultData?.vote_average.toFixed(1)}/10
          </Typography>
        </Box>

       

        <Box className={styles.container}>
          <Typography className={styles.heading}>Genre</Typography>
          <Typography className={styles.detail}>
            {resultData?.genres.map((val, key) => (
              <span key={key} style={{ marginRight: "10px" }}>
                | {val.name} |{" "}
              </span>
            ))}
          </Typography>
        </Box>
        <Box className={styles.container}>
          <Typography className={styles.heading}>No. of Seasons</Typography>
          <Typography className={styles.detail}>
            {resultData?.number_of_seasons}
          </Typography>
        </Box>
        <Box className={styles.container}>
          <Typography className={styles.heading}>Language</Typography>
          <Typography className={styles.detail}>
            {resultData?.spoken_languages.map((val, key) => (
              <span key={key} style={{ marginRight: "10px" }}>
                {val.name}
              </span>
            ))}
          </Typography>
        </Box>

        <Box className={styles.container}>
          <Typography className={styles.heading}>Cast</Typography>
          <Typography className={styles.detail}>
            {" "}
            {actors?.cast?.map((val, key) => (
              <span key={key} style={{ marginRight: "10px" }}>
                {val.name} ,
              </span>
            ))}
          </Typography>
        </Box>
        <Box className={styles.container}>
          <Typography className={styles.heading}>Director</Typography>
          <Typography className={styles.detail}>
            {resultData?.created_by[0]?.name}
          </Typography>
        </Box>

        <Box className={styles.container}>
          <Typography className={styles.heading}>Production</Typography>
          <Typography className={styles.detail}>
            {resultData?.production_companies.map((val, key) => (
              <span key={key} style={{ marginRight: "10px" }}>
                {val.name}{"       "}
              </span>
            ))}
          </Typography>
        </Box>

        <Box className={styles.container}>
          <Typography className={styles.heading}>Production Countries</Typography>
          <Typography className={styles.detail}>
            {resultData?.production_countries.map((val, key) => (
              <span key={key} style={{ marginRight: "10px" }}>
                {val.name}{"       "}
              </span>
            ))}
          </Typography>
        </Box>

        
      </Box>
    </Box>
  );
}

export default Detail;
