import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "@/Components/VideoComponent/episode.module.css";
import { useDispatch, useSelector } from "react-redux";
import { episodeDetailAction } from "@/Redux/actions";
import Image from "next/image";
import Loading from "@/pages/loading";

function Episodes({ season, id, resultData }) {
  const episode = useSelector((state) => state.episodeDetail.state);
  const [seasons, setSeason] = useState(1)
  const [loading, setLoading] = useState(true)


  function formatDate(inputDate) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(inputDate).toLocaleDateString(undefined, options);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true)
    dispatch(episodeDetailAction(seasons, id))
    setTimeout(() => {
        setLoading(false)
    }, 3000)
  }, [seasons, id]);

  return (
   loading ? <Loading /> : (
    <Box>
    <select name="season" onChange={(e) => setSeason(e.target.value)} id="cars" value={seasons} className={styles.selec}>
      {season?.map((val, key) => (
        <>
          <option value={`${key + 1}`}>{`Season ${key + 1}`}</option>
        </>
      ))}
    </select>
    <Box>
      {episode?.episodes?.map((val, key) => (
        <>
          <Box sx={{ display: "flex" }}>
            <Image
              style={{
                height: "17rem",
                margin: "1rem 3rem",
                borderRadius: "8px",
                width: "26%"
              }}
              src={
                val?.still_path
                  ? `https://image.tmdb.org/t/p/original/${val?.still_path}`
                  : `https://image.tmdb.org/t/p/original/${val?.poster_path || resultData?.backdrop_path || resultData?.poster_path}`
              }
              width={1600}
              height={1000}
              alt="primaryImage"
            />
            <Box sx={{ margin: "20px 5px" }}>
              <Typography
               variant="h5"
               sx={{marginTop :"10px"}}
              >
                S{val?.season_number} E{val?.episode_number} - {val?.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  fontSize: "1.2rem",
                  color: "#aaa",
                  gap: "35px",
                  marginTop: "10px",
                }}
              >
                <Typography
                 variant="h3"
                >
                  {formatDate(val?.air_date)}
                </Typography>
                <Typography
                  variant="h3"
                >
                  {val?.runtime}min
                </Typography>
              </Box>
              <Typography
               variant="h3"
                sx={{
                  fontSize: "1.2rem",
                  color: "#aaa",
                  marginTop: "10px",
                }}
              >
                {val?.overview}
              </Typography>
              <Typography
               variant="h3"
                sx={{
                  fontSize: "1.2rem",
                  color: "#aaa",
                  marginTop: "10px",
                }}
              >
                {(val?.vote_average === 0 || !val?.vote_average) ? "9.0" : val?.vote_average.toFixed(1)}/10
              </Typography>
            </Box>
          </Box>
        </>
      ))}
    </Box>
  </Box>
   )
  );
}

export default Episodes;
