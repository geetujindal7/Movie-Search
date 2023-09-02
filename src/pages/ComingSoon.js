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
import { ComingSoon } from "@/Redux/actions";
import ComingSoonFilters from "@/Components/Upcoming/ComingSoonFilters";
import Loading from "./loading";
import Router from 'next/router'

function ComingSoonMovie() {
  const filter = useSelector((state) => state.comingSoon.state);
  const dispatch = useDispatch();
  const [genre, setGenre] = useState("Crime");
  const [year, setYear] = useState("2023");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  // const [count, setCount] = useState(2)
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (genre) {
      setLoading(true);
      dispatch(ComingSoon(50, genre, page, year));
    }

    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  }, [dispatch, genre, page, year]);

  const handleGenreChange = (value, year) => {
    setGenre(value);
    setYear(year);
    setPage(1)
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
  }, []);

  return (
    <>
    {loading && <Loading />}
      <Box
        sx={{ display: "flex", gap: "5px", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", gap: "5px", padding: "15px" }}>
            <KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem" }} />
          <Typography sx={{ marginTop: "2px", fontSize: "20px" }}>Coming Soon</Typography>
          <Box sx={{ position: "absolute", right: "40px" }}>
            <ComingSoonFilters handleGenreChange={handleGenreChange} />
          </Box>
        </Box>
      </Box>
      {
        (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ padding: "20px", fontSize: "1.5rem" }}>
              <Box className={styles.card_container_wrap}>
                {!(filter?.results?.length === 0) ? (
                  filter?.results?.map((value, key) => {
                    return (
                      value?.primaryImage?.url ? (
                        <Box key={key} className={styles.Card}>
                          <Image
                            style={{ borderRadius: "12px" }}
                            src={value?.primaryImage?.url}
                            width={250}
                            height={300}
                            alt="primaryImage"
                          />
                        </Box>
                      ) : (
                        <Box className={styles.Card}>
                          <Image
                            style={{ borderRadius: "12px" }}
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
                    borderRadius: "18px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "2.8rem",
                  }}
                >
                  <Pagination
                    onChange={handlePageChange}
                    page={page}
                    count={5}
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

export default ComingSoonMovie;
