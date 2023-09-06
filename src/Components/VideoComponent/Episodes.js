import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "@/Components/VideoComponent/episode.module.css";
import { useDispatch, useSelector } from "react-redux";
import { episodeDetailAction } from "@/Redux/actions";
import Image from "next/image";
import Loading from "@/pages/loading";

function Episodes({ season, id }) {
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
                width: "27%",
                height: "17rem",
                margin: "1rem 3rem",
                borderRadius: "8px",
              }}
              src={
                val?.still_path
                  ? `https://image.tmdb.org/t/p/original/${val?.still_path}`
                  : `https://img.lovepik.com/element/40128/7461.png_1200.png`
              }
              width={1600}
              height={1000}
              alt="primaryImage"
            />
            <Box sx={{ margin: "32px 5px" }}>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                S{val?.season_number} E{val?.episode_number} - {val?.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "20px",
                  fontSize: "1.2rem",
                  color: "#aaa",
                  gap: "35px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                  }}
                >
                  {formatDate(val?.air_date)}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                  }}
                >
                  {val?.runtime}min
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "#aaa",
                  marginTop: "10px",
                }}
              >
                {val?.overview}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "#aaa",
                  marginTop: "10px",
                }}
              >
                {val?.vote_average.toFixed(1)}/10
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
