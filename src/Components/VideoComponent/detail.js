import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "@/Components/RelatedDetails/Related.module.css";

function Detail({ resultData, actors }) {
  console.log(resultData);
  return (
    <Box>
      <Box sx={{ padding: "3rem 6rem" }}>
        <Typography variant="h2">More Info</Typography>
        <Box className={styles.container}>
          <Typography variant="h5">Title</Typography>
          <Typography variant="h3">
            {resultData?.original_name}
          </Typography>
        </Box>
        <Box className={styles.container}>
          <Typography variant="h5">Info</Typography>
          <Typography variant="h3">
            {resultData?.overview}
          </Typography>
        </Box>

        <Box className={styles.container}>
          <Typography variant="h5">IMDB</Typography>
          <Typography variant="h3">
            {resultData?.vote_average.toFixed(1)}/10
          </Typography>
        </Box>

       

        <Box className={styles.container}>
          <Typography variant="h5">Genre</Typography>
          <Typography variant="h3">
            {resultData?.genres.map((val, key) => (
              <span key={key} style={{ marginRight: "10px" }}>
                | {val.name} |{" "}
              </span>
            ))}
          </Typography>
        </Box>
        <Box className={styles.container}>
          <Typography variant="h5">No. of Seasons</Typography>
          <Typography variant="h3">
            {resultData?.number_of_seasons}
          </Typography>
        </Box>
        <Box className={styles.container}>
          <Typography variant="h5">Language</Typography>
          <Typography variant="h3">
            {resultData?.spoken_languages.map((val, key) => (
              <span key={key} style={{ marginRight: "10px" }}>
                {val.name}
              </span>
            ))}
          </Typography>
        </Box>

        <Box className={styles.container}>
          <Typography variant="h5">Cast</Typography>
          <Typography variant="h3">
            {" "}
            {actors?.cast?.map((val, key) => (
              <span key={key} style={{ marginRight: "10px" }}>
                {val.name} ,
              </span>
            ))}
          </Typography>
        </Box>
        <Box className={styles.container}>
          <Typography variant="h5">Director</Typography>
          <Typography variant="h3">
            {resultData?.created_by[0]?.name}
          </Typography>
        </Box>

        <Box className={styles.container}>
          <Typography variant="h5">Production</Typography>
          <Typography variant="h3">
            {resultData?.production_companies.map((val, key) => (
              <span key={key} style={{ marginRight: "10px" }}>
                {val.name}{"       "}
              </span>
            ))}
          </Typography>
        </Box>

        <Box className={styles.container}>
          <Typography variant="h5">Production Countries</Typography>
          <Typography variant="h3">
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
