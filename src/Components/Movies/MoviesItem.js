/* eslint-disable @next/next/no-img-element */
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import styles from "./MovieItem.module.css";
import Image from "next/image";
import Loading from "@/pages/loading";
import NoData from "@/pages/404";
import Link from "next/link";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Router from "next/router";

function MoviesItem() {
  const filter = useSelector((state) => state.searchMovie.state);
  const filtertv = useSelector((state) => state.searchTv.state);
  const [loading, setLoading] = useState(true);
  const [newUpdated, setnewUpdated] = useState([]);

  const [key, setKey] = useState(0);

  const splitSentence = (value) => {
    const firstDot = value.search(/[.!?]/);
    const secondDot = value.indexOf('.', firstDot + 1);
    console.log(firstDot)
    return value.slice(0, firstDot+1)
  }

  useEffect(() => {
    setLoading(true)
    if (filter && filtertv) {
      setLoading(false);
      setnewUpdated([...filtertv, ...filter])
      // setKey(filter.length - 1)
    }
  }, [filter, key, loading, filtertv]);

  return (
    <>
      {loading ? (
        <Box>
          <Loading />
        </Box>
      ) : newUpdated?.length === 0 ? (
        <Box>
          <NoData />
        </Box>
      ) : (
        <>
          <Box sx={{ margin: "30px" }}>
            <Box>
              {/* <KeyboardArrowLeftIcon
                onClick={() => Router.back()}
                sx={{ fontSize: "2rem" }}
              /> */}
              <Typography variant="h2">
                Results
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0px 5.4rem",
                marginTop: "24px"
              }}
            >
              {newUpdated?.map(
                (value, key) =>
                  (value?.backdrop_path || value?.poster_path) && (
                    <>
                      <Box className={styles.main_trailer_image}>
                        <Box sx={{
                          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                          transition: "0.9s",
                        }}>
                          <Image
                            key={key}
                            className={styles.trailer_image}
                            src={`https://image.tmdb.org/t/p/original/${value?.backdrop_path || value?.poster_path
                              }`}
                            alt="values"
                            width={1000}
                            height={100}
                          />
                        </Box>

                        <Box
                          sx={{
                            padding: "16px",
                            backgroundColor: "black",
                            opacity: "0.6",
                            marginTop: "-18rem",
                            height: "18rem",
                            borderRadius: "0px 0px 8px 8px",
                          }}
                        >
                          <Box sx={{
                            display: 'flex',
                            flexDirection: "column",
                          }}>
                            <Typography sx={{
                              wordWrap: "break-word",
                              width: "100%",
                              minHeight: "4rem"
                            }} variant="h4">
                              {value?.original_title ||
                                value?.original_name}
                            </Typography>
                            <Typography
                              variant="h3"
                              sx={{
                                wordBreak: "break-word",
                                width: "370px",
                                minHeight: "8rem",
                              }}
                            >
                              {splitSentence(value.overview)}
                            </Typography>
                            <Link
                              href={{
                                pathname: "detailVideo",
                                query: {
                                  id: value.id,
                                },
                              }}
                            >
                              {" "}
                             <Box sx={{display:"flex", justifyContent: "center"}}>
                             <Button className={styles.buttn}>
                                Watch Trailer
                              </Button>
                             </Box>
                            </Link>
                          </Box>

                        </Box>
                        {/* <Box
                          sx={{
                            position: "relative",
                            bottom: "13rem",
                            width: "100%",
                            height: "20%",
                            marginLeft: "44px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "18px !important",
                              color: "yellow",
                              wordBreak: "break-word",
                              width: "350px",
                            }}
                          >
                            {value?.original_title?.slice(0, 27) ||
                              value?.original_name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              wordBreak: "break-word",
                              width: "350px",
                            }}
                          >
                            {value.overview.slice(0, 100)}...
                          </Typography>
                          <Link
                            href={{
                              pathname: "detailVideo",
                              query: {
                                id: value.id,
                              },
                            }}
                          >
                            {" "}
                            <Button className={styles.buttn}>
                              Watch Trailer
                            </Button>
                          </Link>
                        </Box> */}
                      </Box>
                    </>
                  )
              )}
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default MoviesItem;
