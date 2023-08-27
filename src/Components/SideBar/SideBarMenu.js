/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import styles from '@/Components/SideBar/popper.module.css';
import axios from 'axios';
import { AppContext } from '../AppContext';
import Link from 'next/link';
import { SearchApi } from '@/Redux/actions';
import { useDispatch } from 'react-redux';

function SideBarMenu() {

	const dispatch = useDispatch()
	const { follow } = useContext(AppContext)

	const followSet = [...new Set(follow)]

	return (
		<Box className={styles.sidebar_container}>
			<Link href='/'>
				<img
					src="https://static.vecteezy.com/system/resources/thumbnails/002/236/321/small/movie-trendy-banner-vector.jpg"
					alt="logo"
					width={220}
				/>
			</Link>
			<Typography className={styles.typoHeader}>News Feed</Typography>
			<Typography className={styles.typoColumn}>Browse</Typography>
			<Typography className={styles.typoColumn}>Wishlist</Typography>
			<Link href='/ComingSoon'>
				<Typography className={styles.typoColumn}>Coming</Typography>
			</Link>
			<Link href='/celebrities'>
				<Typography className={styles.typoColumn}>Celebrities</Typography>
			</Link>
			<Link href='/movies'>
				<Typography className={styles.typoColumn}>Movies</Typography>
			</Link>
			<hr />
			<Typography className={styles.typoHeader}>Following</Typography>
			<Box sx={{
				height: "400px",
				width: "200px",
				overflow: "auto",
			}}>
				{
					followSet?.map((value, key) => (<Link key={key} href={{ pathname: `/search`, query: { select: `Actor`, search: `${value}` } }}>
						<Typography className={styles.typoColumn} onClick={() => dispatch(SearchApi(value))}>{value}</Typography>
					</Link>))
				}
			</Box>
		</Box>
	);
}

export default SideBarMenu;
