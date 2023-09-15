import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/search.module.css";
import { useSelector } from "react-redux";
import Loading from "@/pages/loading";
import NoData from "../../pages/404";
import { AppContext } from "../AppContext";
import Link from "next/link";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import axios from "axios";
import Router from "next/router";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ActorItems({ search }) {
  const filter = useSelector((state) => state.searchApi.state);
  const [data, setData] = useState(filter);
  const [loading, setLoading] = useState(true);
  const [followed, setFollowed] = useState(false);
  const { follow, handleFollow } = useContext(AppContext);
  const [actordetails, setActorDetails] = useState();
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const itemsPerPage = 20;

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/person/${filter[0]?.actorId}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setActorDetails(response.data);
      })
      .catch(function (error) {
        setError(error);
      });
  };

  useEffect(() => {
    const simulatedData = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
    }));
    setData(simulatedData);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items to display on the current page
  const itemsToShow = data?.slice(startIndex, endIndex);
  console.log(itemsToShow)

  const handlePageChange = (event, page) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setCurrentPage(page);
  };

  useEffect(() => {
    setLoading(true);
    if (filter) {
      setData(filter);
      fetchData();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [filter]);

  useEffect(() => {
    if (actordetails || error) {
      setLoading(false);
    }
  }, [actordetails, error]);

  useEffect(() => {
    setFollowed(follow.includes(search));
  }, [follow, search]);

  return (
    <>
      {loading ? (
        <Box>
          <Loading />
        </Box>
      ) : !filter?.error && filter?.length > 1 && !error ? (
        <Box sx={{ margin: "6px 30px" }}>
          <Box className={styles.Image_Header}>
            <Image
              className={styles.actorImage}
              src={`https://image.tmdb.org/t/p/original/${
                actordetails?.profile_path || filter[0].poster_path
              }`}
              width={635}
              height={350}
              alt="actor image"
            />
            <Box className={styles.name_container}>
              <Typography variant="h2" className={styles.name}>
                {actordetails?.name} (
                {actordetails?.also_known_as[0] || actordetails?.name})
              </Typography>
              {actordetails?.biography && (
                <>
                  <Typography variant="h3" className={styles.actorDetail}>
                    {show ? actordetails?.biography : actordetails?.biography.slice(0, 340) }
                    {actordetails?.biography?.length > 350 && <span className={styles.showButton} onClick={() => setShow(!show)}>{show ? 'Less' : '...'}</span>}
                  </Typography>
                  <Typography variant="h3" className={styles.actorDetail}>
                    Birth: {actordetails?.birthday}
                  </Typography>
                  <Typography variant="h3" className={styles.actorDetail}>
                    {actordetails?.place_of_birth}
                  </Typography>
                </>
              )}
              <Button
                style={{
                  marginTop: "20px",
                }}
                variant="outlined"
                onClick={() => handleFollow(search, followed)}
              >
                {followed ? "Unfollow" : "Follow"}
              </Button>
            </Box>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            {/* <KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem", marginTop: "1rem" }} /> */}
            <Typography variant="h2" className={styles.movie_header}>
              Movies
            </Typography>
          </Box>
          <Box sx={{ height: "100%" }}>
            <Box className={styles.card}>
              {itemsToShow?.map((e, key) => (
                <Link key={key} href={`/search/detail/${e.id}`}>
                  {(e.poster_path || e.backdrop_path) ? (
                    <>
                      <Box
                        sx={{
                          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                          transition: "0.9s",
                        }}
                      >
                        <Image
                          style={{ borderRadius: "8px", opacity: "0.9" }}
                          src={`https://image.tmdb.org/t/p/w500/${
                            e.poster_path || e.backdrop_path
                          }`}
                          alt="poster_path"
                          width={320}
                          height={200}
                        />
                        <Box
                          sx={{
                            padding: "14px 11px",
                            backgroundColor: "black",
                            opacity: "0.9",
                            marginTop: "-53px",
                            height: "50px",
                            borderRadius: "0px 0px 8px 8px",
                          }}
                        >
                          <Box>
                            <Typography variant="h4" sx={{textAlign: "center"}}>
                              {e.title.slice(0, 30)}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  ):  <Box
                        sx={{
                          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                          transition: "0.9s",
                        }}
                      >
                         <Image
                          style={{ borderRadius: "8px", opacity: "0.9" }}
                          src={`https://altabel.files.wordpress.com/2016/11/1.jpg`}
                          alt="poster_path"
                          width={320}
                          height={200}
                        />
                        <Box
                          sx={{
                            padding: "14px 11px",
                            backgroundColor: "black",
                            opacity: "0.9",
                            marginTop: "-53px",
                            height: "50px",
                            borderRadius: "0px 0px 8px 8px",
                          }}
                        >
                          <Box>
                            <Typography variant="h4" sx={{textAlign: "center"}}>
                              {e.title.slice(0, 30)}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>}
                </Link>
              ))}
            </Box>
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
                backgroundColor: "#121212",
                borderRadius: "18px",
                height: "2.8rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "36%",
                marginBottom: "20px"
              }}
            >
              <Pagination
                count={Math.ceil(data.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                size="large"
                color="primary"
              />
            </Stack>
          </Box>
        </Box>
      ) : (
        <Box>
          <NoData />
        </Box>
      )}
    </>
  );
}

export default ActorItems;
