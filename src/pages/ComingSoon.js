/* eslint-disable @next/next/no-img-element */
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
import { ComingSoon } from "@/Redux/actions";
import ComingSoonFilters from "@/Components/Upcoming/ComingSoonFilters";
import Loading from "./loading";
import Router from 'next/router'
import { AppContext } from "@/Components/AppContext";

function ComingSoonMovie() {
  const filters = useSelector((state) => state.comingSoon.state);
  const dispatch = useDispatch();
  const [genre, setGenre] = useState("Action");
  // const [data, setData] = useState(filters);
  const [id, setID] = useState(28);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)

  const { setIsOpen } = useContext(AppContext);

  // const [count, setCount] = useState(2)
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (genre) {
      setLoading(true);
      dispatch(ComingSoon(id, genre, page));
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [dispatch, genre, page, id]);

  const handleGenreChange = (value, id) => {
    setGenre(value);
    setID(id);
    setPage(1)
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
     {loading ? <Loading /> : (
        <>
          <Box onClick={() => setIsOpen(false)} sx={{ margin: "24px 53px" }}>
            <Box>
              <Box sx={{ margin: "30px 0px" }}>
                {/* <KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem" }} /> */}
                <Typography variant="h2">Coming Soon</Typography>
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
                      count={filter?.total_pages > 500 ? 500 : filter?.total_pages}
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

export default ComingSoonMovie;
