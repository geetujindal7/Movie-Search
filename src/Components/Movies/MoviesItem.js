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

  useEffect(() => {
	setLoading(true)
    if (filter && filtertv) {
      setLoading(false);
	  setnewUpdated([...filter, ...filtertv])
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
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: "5px", padding: "15px" }}>
              <KeyboardArrowLeftIcon
                onClick={() => Router.back()}
                sx={{ fontSize: "2rem" }}
              />
              <Typography sx={{ marginTop: "2px", fontSize: "20px" }}>
                Results
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
			  margin : "0px 50px"
            }}
          >
            {newUpdated?.map(
              (value, key) =>
                (value?.backdrop_path || value?.poster_path) && (
                  <>
                    <Box className={styles.main_trailer_image}>
                      <Image
                        key={key}
                        className={styles.trailer_image}
                        src={`https://image.tmdb.org/t/p/original/${
                          value?.backdrop_path || value?.poster_path
                        }`}
                        alt="values"
                        width={1000}
                        height={100}
                      />
                      <Box
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
                      </Box>
                    </Box>
                  </>
                )
            )}
          </Box>
        </>
      )}
    </>
  );
}

export default MoviesItem;
