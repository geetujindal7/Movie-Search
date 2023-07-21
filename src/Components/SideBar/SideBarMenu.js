/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import styles from '@/Components/SideBar/popper.module.css';
import axios from 'axios';

function SideBarMenu() {
	
	return (
		<Box className={styles.sidebar_container}>
			<img
				src="https://static.vecteezy.com/system/resources/thumbnails/002/236/321/small/movie-trendy-banner-vector.jpg"
				alt="logo"
				width={150}
			/>
			<Typography className={styles.typoHeader}>News Feed</Typography>
			<Typography className={styles.typoColumn}>Browse</Typography>
			<Typography className={styles.typoColumn}>Wishlist</Typography>
			<Typography className={styles.typoColumn}>Coming Soon</Typography>
			<hr />
			<Typography className={styles.typoHeader}>Following</Typography>
			<Typography className={styles.typoColumn}>Browse</Typography>
			
		</Box>
	);
}

export default SideBarMenu;
