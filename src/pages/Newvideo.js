import React, { useEffect, useState } from "react";
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
import Review from "@/Components/VideoComponent/Review";
import Episodes from "@/Components/VideoComponent/Episodes";
import Detail from "@/Components/VideoComponent/detail";

function Newvideo({ result, error, resultData, actors, getImages, getReviews }) {
    const [loading, setLoading] = useState(true);
    const [trailer, setTrailer] = useState(false);
    const [show, setShow] = useState("Episode")
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
                    <Box
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
                            {/* <Typography sx={{ marginTop: "2px", fontSize: "20px" }}>Results</Typography> */}
                        </Box>
                    </Box>
                    <Box sx={getReviews?.results?.length !== 0 && { height: "210vh" }}>
                        {(result?.results?.length !== 0 && !error) ||
                            resultData?.backdrop_path ||
                            resultData?.poster_path ? (
                            <Box>
                                <Box sx={getReviews?.results?.length !== 0 ? { height: "95vh" } : { height: "90vh" }}>
                                    {!trailer ? (
                                        <>
                                            {getImages?.backdrops?.map((val, index) => (
                                                <Image
                                                    key={index}
                                                    className={
                                                        index === currentIndex
                                                            ? `${style.slide} ${style.active} `
                                                            : `${style.slide} `
                                                    }
                                                    style={{
                                                        width: "100%",
                                                        height: "90vh",
                                                        opacity: "0.4",
                                                        marginTop: "-28px",
                                                    }}
                                                    src={`https://image.tmdb.org/t/p/original/${val?.file_path}`}
                                                    width={1150}
                                                    height={650}
                                                    alt="primaryImage"
                                                />
                                            ))}
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    bottom: "20rem",
                                                    left: "4rem",
                                                    right: "7rem",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        width: "100%",
                                                        fontSize: "1.7rem",
                                                        color: "white",
                                                    }}
                                                >
                                                    {resultData?.original_name}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        width: "40%",
                                                        marginTop: "5px",
                                                        fontSize: "1.2rem",
                                                        color: "#b5b5b5",
                                                    }}
                                                >
                                                    {resultData?.overview.slice(0,550)} ..
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
                                                        sx={{
                                                            fontSize: "1.2rem",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {actors?.cast?.slice(0, 3).map((val, key) => (
                                                            <span key={key} style={{ marginRight: "10px" }}>
                                                                {val.name}{" "}
                                                            </span>
                                                        ))}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "1.2rem",
                                                            color: "#b5b5b5",
                                                        }}
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
                                                            sx={{
                                                                marginTop: "5px",
                                                                fontSize: "1.2rem",
                                                                color: "#b5b5b5",
                                                            }}
                                                        >
                                                            IMDB {resultData?.vote_average.toFixed(1)}
                                                        </Typography>
                                                        {/* <AttachMoneyIcon sx={{color: "#b5b5b5", marginTop:" 7px"}}/> */}
                                                        <Typography
                                                            sx={{
                                                                marginTop: "5px",
                                                                fontSize: "1.2rem",
                                                                color: "#b5b5b5",
                                                            }}
                                                        >
                                                            {resultData?.number_of_seasons} Seasons
                                                        </Typography>
                                                    </Box>
                                                    <Typography
                                                        sx={{
                                                            marginTop: "5px",
                                                            fontSize: "1.2rem",
                                                            color: "#b5b5b5",
                                                        }}
                                                    >
                                                        Release: {formatDate(resultData?.first_air_date)}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            width: "80%",
                                                            marginTop: "5px",
                                                            fontSize: "1.2rem",
                                                            color: "#b5b5b5",
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

                                                       <Button
                                                                style={{
                                                                    color: "white",
                                                                    borderColor: "white",
                                                                    marginTop: "10px",
                                                                }}
                                                                variant="outlined"
                                                                onClick={scrollToSection}
                                                            >
                                                                Episodes
                                                            </Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </>
                                    ) : (
                                        <>
                                            <iframe
                                                style={{
                                                    width: "100%",
                                                    height: "90vh",
                                                    opacity: "0.7",
                                                    marginTop: "-28px",
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
                                <Box sx={{display: "flex", justifyContent: "center"}}>
                                    <Box sx={{
                                        width: "40%",
                                        background: "#212121",
                                        height: "3rem",
                                        borderRadius: "8px",
                                        margin : "10px 0px"
                                    }}>
                                        <Box sx={{display: "flex", padding: "10px", justifyContent: "space-evenly"}}>
                                            <Typography sx={{fontSize: "18px", cursor: "pointer"}} onClick={() => setShow("Episode")}>Episodes</Typography>
                                            <Typography sx={{fontSize: "18px", cursor: "pointer"}} onClick={() => setShow("Detail")}>Details</Typography>
                                            {
                                                            getReviews?.results?.length !== 0 && (<Typography sx={{fontSize: "18px", cursor: "pointer"}} onClick={() => setShow("Rating")}>Rating</Typography>)}
                                        </Box>

                                    </Box>
                                </Box>
                                {
                                   show === "Episode" ? (<Box><Episodes season={resultData?.seasons} id={resultData?.id}/></Box>) : 
                                    (show === "Detail" ? (<Box><Detail resultData={resultData} actors={actors}/></Box>) : ( <Review getReviews= {getReviews}/>)
                                    )
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
        url: `https://api.themoviedb.org/3/tv/${context.query.id}/videos`,
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
        },
    };

    const option = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${context.query.id}`,
        params: { language: "en-US" },
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
        },
    };

    const options2 = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${context.query.id}/credits`,
        params: { language: "en-US" },
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
        },
    };

    const images = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${context.query.id}/images`,
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro",
        },
    };

    const review = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${context.query.id}/reviews`,
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

export default Newvideo;
