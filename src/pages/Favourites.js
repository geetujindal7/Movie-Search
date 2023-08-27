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
  
    console.log(filter)
    return (
      <Box sx={{ display: "flex" }}>
        <Box sx={{ padding: "20px", fontSize: "1.5rem" }}>
          <Box
            sx={{ display: "flex", gap: "5px", justifyContent: "space-between" }}
          >
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Link href={"/"}>
                <KeyboardArrowLeftIcon sx={{ fontSize: "2rem" }} />
              </Link>
              <Box sx={{ marginTop: "1px" }}>Favourite</Box>
            </Box>
          </Box>
          <Box className={styles.card_container_wrap}>
            {!(filter?.length === 0) ? (
              filter?.map((value, key) => {
                return (
                  value?.primaryImage?.url && (
                    <Box key={key} className={styles.Card}>
                      <Image
                        style={{ borderRadius: "12px" }}
                        src={value?.primaryImage?.url}
                        width={250}
                        height={300}
                        alt="primaryImage"
                      />
                    </Box>
                  )
                );
              })
            ) : (
            <Box>
            <Typography sx={{margin: "50px auto"}}>
              No data Found
              </Typography>
            </Box>
            )}
            {/* <Typography onClick={() => setPage(page + 1)}>Load More...</Typography> */}
          </Box>
        </Box>
        <Box sx={{ position: "absolute", right: "0px" }}>
          <Random handleGenreChange={handleGenreChange} />
        </Box>
      </Box>
    );
  }
  
  export default Favourites;
  