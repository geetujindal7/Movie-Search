/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import styles from "@/Components/SideBar/popper.module.css";
import axios from "axios";
import { AppContext } from "../AppContext";
import Link from "next/link";
import { SearchApi } from "@/Redux/actions";
import { useDispatch } from "react-redux";

function SideBarMenu() {
  const dispatch = useDispatch();
  const { follow, setIsOpen } = useContext(AppContext);
  const followSet = [...new Set(follow)];

  const handleDispatch = (val) => {
    setIsOpen(false)
    dispatch(SearchApi(val))
  }


  return (
    <Box className={styles.sidebar_container}>
    <Box onClick={() => setIsOpen(false)} className={styles.x}>X</Box>
      <Link href="/">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/236/321/small/movie-trendy-banner-vector.jpg"
          alt="logo"
          style={{ borderRadius: "8px" }}
          width={170}
          onClick={() => setIsOpen(false)}
        />
      </Link>
      <Typography variant="h2" className={styles.typoHeader}>News Feed</Typography>
      <Link href="/ComingSoon">
        <Typography variant="h3" className={styles.typoColumn} onClick={() => setIsOpen(false)}>Coming</Typography>
      </Link>
      <Link href="/celebrities?page=1">
        <Typography variant="h3"   className={styles.typoColumn} onClick={() => setIsOpen(false)}>Celebrities</Typography>
      </Link>
      <Link href="/movies">
        <Typography variant="h3" className={styles.typoColumn} onClick={() => setIsOpen(false)}>Movies</Typography>
      </Link>
      <hr />
      <Typography variant="h2" className={styles.typoHeader}>Following</Typography>
      <Box
        sx={{
          height: "400px",
          width: "200px",
          overflow: "auto",
        }}
      >
        {followSet?.map((value, key) => (
          <Link
            key={key}
            href={{
              pathname: `/search`,
              query: { select: `Actor`, search: `${value}` },
            }}
          >
            <Typography
            variant="h3" 
              className={styles.typoColumn}
              onClick={() => handleDispatch(value)}
            >
              {value}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default SideBarMenu;
