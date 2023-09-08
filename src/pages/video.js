import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import styles from "@/Components/MainComponent/slider.module.css";
import { CircularProgress } from "@mui/material";
import Loading from "./loading";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";
import Router from "next/router";
import NoData from "./404";
import Image from "next/image";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import style from "@/Components/MainComponent/slider.module.css";
import StarIcon from '@mui/icons-material/Star';
import Review from "@/Components/VideoComponent/Review";
import { AppContext } from "@/Components/AppContext";

function Video({ result, error, resultData, actors, getImages, getReviews }) {
  const [loading, setLoading] = useState(true);
  const [trailer, setTrailer] = useState(false);
  const { setIsOpen } = useContext(AppContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === getImages?.backdrops?.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 500000);
    return () => clearInterval(timer);
  }, []);

  function formatDate(inputDate) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(inputDate).toLocaleDateString(undefined, options);
  }

  function scrollToSection() {
    // Scroll to a specific Y position (e.g., 500 pixels from the top)
    window.scrollTo(0, 800);
  }

  useEffect(() => {
    if ((result && resultData) || error) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [result, error, resultData]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <Box
            sx={{
              display: "flex",
              gap: "5px",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ position: "relative", top: "10px", zIndex: "10" }}>
              <KeyboardArrowLeftIcon
                onClick={() => Router.back()}
                sx={{ fontSize: "2rem" }}
              />
              <Typography sx={{ marginTop: "2px", fontSize: "20px" }}>Results</Typography>
            </Box>
          </Box> */}
          <Box onClick={() => setIsOpen(false)} sx={getReviews?.results?.length !== 0 && { height: "210vh" }}>
            {(result?.results?.length !== 0 && !error) ||
              resultData?.backdrop_path ||
              resultData?.poster_path ? (
              <Box>
                <Box sx={getReviews?.results?.length !== 0 ? { height: "95vh" } : { height: "92vh" }}>
                  {!trailer ? (
                    <>
                      {getImages?.backdrops?.length === 0 ? (<Box>
                        <Image
                          style={{
                            width: "100%",
                            height: "92vh",
                            opacity: "0.4",
                          }}
                          src={`https://image.tmdb.org/t/p/original/${resultData?.poster_path || resultData?.backdrop_path}`}
                          width={1150}
                          height={600}
                          alt="primaryImage"
                        />

                      </Box>) : (getImages?.backdrops?.map((val, index) => (
                        <Image
                          key={index}
                          className={
                            index === currentIndex
                              ? `${style.slide} ${style.active} `
                              : `${style.slide} `
                          }
                          style={{
                            width: "100%",
                            height: "92vh",
                            opacity: "0.4",
                          }}
                          src={`https://image.tmdb.org/t/p/original/${val?.file_path}`}
                          width={1150}
                          height={600}
                          alt="primaryImage"
                        />
                      )))}
                      <Box
                        sx={{
                          position: "relative",
                          bottom: "20rem",
                          left: "4rem",
                          right: "7rem",
                        }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            width: "100%",
                          }}
                        >
                          {resultData?.original_title}
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{
                            width: "40%",
                            marginTop: "5px",
                          }}
                        >
                          {resultData?.overview.slice(0, 550)}
                        </Typography>
                        <Box
                          sx={{
                            position: "absolute",
                            top: "10px",
                            right: "0rem",
                            left: "51rem"
                          }}
                        >
                          <Typography
                            variant="h5"
                          >
                            {actors?.cast?.slice(0, 3).map((val, key) => (
                              <span key={key} style={{ marginRight: "10px" }}>
                                {val.name}{" "}
                              </span>
                            ))}
                          </Typography>
                          <Typography
                            variant="h3"
                          >
                            {resultData?.genres.map((val, key) => (
                              <span key={key} style={{ marginRight: "10px" }}>
                                | {val.name} |{" "}
                              </span>
                            ))}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "20px"
                            }}
                          >
                            <Typography
                              variant="h3"
                              sx={{
                                marginTop: "5px",
                              }}
                            >
                              IMDB {resultData?.vote_average.toFixed(1)}
                            </Typography>
                            {/* <AttachMoneyIcon sx={{color: "#b5b5b5", marginTop:" 7px"}}/> */}
                            <Typography
                              variant="h3"
                              sx={{
                                marginTop: "5px",
                              }}
                            >
                              {resultData?.revenue} $
                            </Typography>
                          </Box>
                          <Typography
                            variant="h3"
                            sx={{
                              marginTop: "5px",
                            }}
                          >
                            Release: {formatDate(resultData?.release_date)}
                          </Typography>
                          <Typography
                            variant="h3"
                            sx={{
                              width: "80%",
                              marginTop: "5px",
                            }}
                          >
                            {resultData?.spoken_languages.map((val, key) => (
                              <span key={key} style={{ marginRight: "10px" }}>
                                {val.name}
                              </span>
                            ))}
                          </Typography>
                          <Box sx={{ display: "flex", gap: "20px" }}>
                            {result?.results?.length !== 0 && <Button
                              style={{
                                color: "white",
                                borderColor: "white",
                                marginTop: "10px",
                              }}
                              variant="outlined"
                              onClick={() => setTrailer(true)}
                            >
                              Watch Trailer
                            </Button>
                            }

                            {
                              getReviews?.results?.length !== 0 && (<Button
                                style={{
                                  color: "white",
                                  borderColor: "white",
                                  marginTop: "10px",
                                }}
                                variant="outlined"
                                onClick={scrollToSection}
                              >
                                Reviews
                              </Button>)
                            }
                          </Box>
                        </Box>
                      </Box>
                    </>
                  ) : (
                    <>
                      <iframe
                        style={{
                          width: "100%",
                          height: "91vh"
                        }}
                        // className={styles.iframe}
                        width="1450"
                        height="650"
                        src={`https://www.youtube.com/embed/${result?.results[0].key}?autoplay=1&playlist=${result?.results[0].key}&modestbranding=0&autohide=1&rel=0&showinfo=0&controls=0&autoPlay=1&modestbranding=0&mute=0&loop=1&rel=0`}
                        title="YouTube Trailer"
                        frameborder="0"
                        autoplay
                        allowtransparency="true"
                      ></iframe>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: "4rem",
                          right: "4rem",
                        }}
                      >
                        <Button
                          style={{
                            color: "white",
                            borderColor: "white",
                          }}
                          variant="outlined"
                          onClick={() => setTrailer(false)}
                        >
                          Stop Trailer
                        </Button>
                      </Box>
                    </>
                  )}
                </Box>
                {
                  getReviews?.results?.length !== 0 && (<Box className={style.review}>
                    <Review getReviews={getReviews} />
                  </Box>)
                }
              </Box>
            ) : (
              <Box>
                <NoData />
              </Box>
            )}
          </Box>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${context.query.id}/videos`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };

  const option = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${context.query.id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };

  const options2 = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${context.query.id}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };

  const images = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${context.query.id}/images`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };

  const review = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${context.query.id}/reviews`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
    },
  };

  try {
    const response = await axios.request(options);
    const result = response.data;
    const responseData = await axios.request(option);
    const resultData = responseData.data;
    const actor = await axios.request(options2);
    const actors = actor.data;
    const allImages = await axios.request(images);
    const getImages = allImages.data;
    const reviews = await axios.request(review);
    const getReviews = reviews.data;

    return {
      props: {
        result,
        resultData,
        actors,
        getImages,
        getReviews,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        error: "An error occurred while fetching data.",
      },
    };
  }
}

export default Video;
