import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "@/Components/Upcoming/upcoming.module.css";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { SearchApi, SearchMovie } from "@/Redux/actions";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Router from "next/router";
import { useRouter } from "next/router";
import Loading from "./loading";
import { CircularProgress } from "@mui/material";

function Movies({ result }) {
  console.log(result);
  const router = useRouter();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // const [imageloading, setimageLoading] = useState(true)

  const handlePageChange = (event, value) => {
    setLoading(true);
    router.push(`/movies?page=${value}`);
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [result]);

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Box className={styles.upcoming_header_movie}>
          <Box sx={{ display: "flex" }}>
            {/* <KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem" }} /> */}
            <Typography sx={{ margin: "10px 0px 20px 0px" }} variant="h2">
              Movies
            </Typography>
          </Box>
          <Box className={styles.card_container_movie} sx={{ flexWrap: "wrap" }}>
            {result?.results?.map((value, key) => {
              return (
                (value?.backdrop_path || value?.poster_path) && (
                  <Box key={key} className={styles.Card}>
                    <Link
                      href={{
                        pathname: "detailVideo",
                        query: {
                          id: value.id,
                        },
                      }}
                    >
                      <Image
                        className={styles.celebrities}
                        src={`https://image.tmdb.org/t/p/original/${
                          value?.poster_path || value?.backdrop_path
                        }`}
                        width={250}
                        height={300}
                        alt="s"
                        onClick={() =>
                          dispatch(SearchMovie(value.original_title))
                        }
                      />
                      <Box
                        sx={{
                          display: " flex",
                          justifyContent: "center",
                          padding: "18px 0px",
                          backgroundColor: "black",
                          opacity: "0.9",
                          marginTop: "-69px",
                          height: "65px",
                          borderRadius: "0px 0px 8px 8px",
                          width: "101%",
                        }}
                      >
                        <Typography variant="h4">
                          {value.original_title}
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                )
              );
            })}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Stack
              spacing={3}
              sx={{
                marginTop: "20px",
                backgroundColor: "#121212",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "2.8rem",
                width: "32%",
              }}
            >
              <Pagination
                onChange={handlePageChange}
                page={page}
                count={result?.total_pages > 500 ? 500 : result?.total_pages}
                size="large"
                color="primary"
              />
            </Stack>
          </Box>
        </Box>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      page: context.query.page,
      "primary_release_date.gte": "2020-01-01",
      "primary_release_date.lte": "2023-01-09",
      sort_by: "popularity.desc",
      with_original_language: "hi",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };

  const response = await axios.request(options);
  const result = response.data;
  // const result = await response.text();
  return {
    props: {
      result,
    },
  };
}

export default Movies;
