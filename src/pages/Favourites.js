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
import React, { useContext, useEffect, useState } from "react";
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
import Loading from "./loading";
import { AppContext } from "@/Components/AppContext";

function Favourites() {
  const filters = useSelector((state) => state.randomMovie.state);
  const dispatch = useDispatch();
  // const [genre, setGenre] = useState("most_pop_movies");
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);
  const { setIsOpen } = useContext(AppContext);


  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (page) {
      setLoading(true)
      dispatch(randomMov(page));

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [dispatch, page]);

  const handleGenreChange = (value) => {
    setGenre(value);
  };

  const handleImageError = (e) => {
    e.target.srcset = "",
      e.target.src = "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="
  };

  return (
    <>
      {loading ? <Loading /> : (
        <>
          <Box onClick={() => setIsOpen(false)} sx={{ margin: "30px" }}>
            <Box>
              <Box sx={{ margin: "30px 0px" }}>
                {/* <KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem" }} /> */}
                <Typography variant="h2">Favourites</Typography>
                {/* <Box sx={{ position: "absolute", right: "40px" }}>
            <ComingSoonFilters handleGenreChange={handleGenreChange} />
          </Box> */}
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box>
                <Box className={styles.card_container_wrap}>
                  {!(filters?.results?.length === 0) ? (
                    filters?.results?.map((value, key) => {
                      return (
                        value?.backdrop_path || value?.poster_path ? (
                          <Box key={key} className={styles.Card}>
                            <Link href={{
                              pathname: "video",
                              query: {
                                id: value.id,
                              }
                            }}>
                              <Image
                                className={styles.soonImage}
                                src={`https://image.tmdb.org/t/p/original/${value?.poster_path || value?.backdrop_path}`}
                                width={250}
                                height={300}
                                alt="primaryImage"
                              />
                            </Link>
                          </Box>
                        ) : (
                          <Box className={styles.Card}>
                            <Image
                              className={styles.soonImage}
                              src={"https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="}
                              width={250}
                              height={300}
                              alt="primaryImage"
                            />
                          </Box>
                        )
                      );
                    })
                  ) : (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img style={{ width: "100%" }} alt="jgsj" src="https://www.ecollegeadmission.com/img/sorry.png"></img>
                    </Box>
                  )}
                  {/* <Typography onClick={() => setPage(page + 1)}>Load More...</Typography> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    spacing={3}
                    sx={{
                      marginTop: "20px",
                      backgroundColor: "#242424",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "2.8rem",
                    }}
                  >
                    <Pagination
                      onChange={handlePageChange}
                      page={page}
                      count={filters?.total_pages > 500 ? 500 : filters?.total_pages}
                      size="large"
                      color="primary"
                    />
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>

  );
}

export default Favourites;
