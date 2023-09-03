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
  import React, { useEffect, useState } from "react";
  import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
  import Link from "next/link";
  import styles from "@/Components/Upcoming/upcoming.module.css";
  import Image from "next/image";
  import { useDispatch, useSelector } from "react-redux";
  // import Pagination from '@mui/material/Pagination';
  import Stack from "@mui/material/Stack";
  import { PopularAPI } from "@/Redux/actions";
  import Loading from "./loading";
  import Router from 'next/router'
  
  function Popular() {
    const filter = useSelector((state) => state.popular.state);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    // const [count, setCount] = useState(2)
  
    const handlePageChange = (event, value) => {
      setPage(value);
    };
  
  
    useEffect(() => {
      if (page) {
        setLoading(true);
        dispatch(PopularAPI(page));
      }
  
      setTimeout(() => {
        setLoading(false); // Set loading to false when rendering is complete
      }, 3000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, page]);
  
    useEffect(() => {
      // Simulate an asynchronous operation (e.g., data fetching)
      // Replace this with your actual async operation
      setTimeout(() => {
        setLoading(false); // Set loading to false when rendering is complete
      }, 2000); // Simulate a 2-second delay
    }, []);
  
    return (
      <>
        <Box
          sx={{ display: "flex", gap: "5px", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex", gap: "5px", padding: "15px" }}>
              <KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem" }} />
            <Typography sx={{ marginTop: "2px", fontSize: "20px" }}>Popular</Typography>
          </Box>
        </Box>
        {
          loading ? <Box><Loading /></Box> : (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ padding: "20px", fontSize: "1.5rem" }}>
  
                <Box className={styles.card_container_wrap}>
                  {!(filter?.results?.length === 0) ? (
                    filter?.results?.map((value, key) => {
                      return (
                        value?.backdrop_path && (
                          <Box key={key} className={styles.Card}>
                            <Image
                              className={styles.soonImage}
                              src={value?.backdrop_path ? `https://image.tmdb.org/t/p/original/${value?.poster_path || value?.backdrop_path}` : "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="}
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
                    className = {styles.pagina}
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
  
          )
        }
      </>
    );
  }
  
  export default Popular;
  