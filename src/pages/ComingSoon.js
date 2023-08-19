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

function ComingSoonMovie() {
  const filter = useSelector((state) => state.comingSoon.state);
  const dispatch = useDispatch();
  const [genre, setGenre] = useState("Drama");
  const [year, setYear] = useState("2023");
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (genre) {
      dispatch(ComingSoon(50, genre, page, year));
    }
  }, [dispatch, genre, page, year]);

  const handleGenreChange = (value, year) => {
    setGenre(value);
    setYear(year);
  };

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
            <Box sx={{ marginTop: "1px" }}>Coming Soon</Box>
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
              count={10}
              size="large"
              color="primary"
            />
          </Stack>
        </Box>
      </Box>
      <Box sx={{ position: "absolute", right: "0px" }}>
        <ComingSoonFilters handleGenreChange={handleGenreChange} />
      </Box>
    </Box>
  );
}

export default ComingSoonMovie;
