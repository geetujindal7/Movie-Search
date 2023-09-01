import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Pagination,
  PaginationItem,
  Slide,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";
import styles from "@/Components/Upcoming/upcoming.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
// import Pagination from '@mui/material/Pagination';
import Stack from "@mui/material/Stack";
//   import { ComingSoon } from "@/Redux/actions";
import { randomMov } from "@/Redux/actions";
import Random from "@/Components/Random";
import Router from 'next/router'
import NoData from "./404";

function Favourites() {
  const filter = useSelector((state) => state.randomMovie.state);
  const dispatch = useDispatch();
  const [genre, setGenre] = useState("most_pop_movies");

  useEffect(() => {
    if (genre) {
      dispatch(randomMov(50, genre));
    }
  }, [dispatch, genre]);

  const handleGenreChange = (value) => {
    setGenre(value);
  };

  const handleImageError = (e) => {
    e.target.srcset = "",
      e.target.src = "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="
  };

  return (<> 
  <Box
        sx={{ display: "flex", gap: "5px", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", gap: "5px", padding: "15px" }}>
            <KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem" }} />
          <Typography sx={{ marginTop: "2px", fontSize: "20px" }}>Favourites</Typography>
          <Box sx={{ position: "absolute", right: "40px" }}>
            <Random handleGenreChange={handleGenreChange} />
          </Box>
        </Box>
      </Box>
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ padding: "20px", fontSize: "1.5rem" }}>
          {!(filter?.length === 0) ? (
            <Box className={styles.card_container_wrap}>
            {filter?.map((value, key) => {
              return (
                value?.primaryImage?.url && (
                  <Box key={key} className={styles.Card}>
                    <Image
                      style={{ borderRadius: "12px" }}
                      src={value?.primaryImage?.url}
                      width={250}
                      height={300}
                      alt="primaryImage"
                      onError={handleImageError}
                    />
                  </Box>
                )
              );
            })
            }
            </Box>
          ) : (
           <NoData />
          )}
          {/* <Typography onClick={() => setPage(page + 1)}>Load More...</Typography> */}
        </Box>
    
    </Box>
  </>
  );
}

export default Favourites;
