/* eslint-disable @next/next/no-img-element */
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import styles from './MovieItem.module.css'
import Image from 'next/image'
import Loading from '@/pages/loading';
import NoData from '@/pages/404';
import Link from 'next/link';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Router from 'next/router'

function MoviesItem() {
	const filter = useSelector((state) => state.searchMovie.state);
	const [loading, setLoading] = useState(true)
	const [key, setKey] = useState(0);

	useEffect(() => {
		if (filter) {
			setLoading(false)
			// setKey(filter.length - 1)
		}
	}, [filter, key, loading])

	// const handleLeft = () => {
	// 	if (key !== 0) {
	// 		setKey(key - 1);
	// 	}
	// 	if (key === 0) {
	// 		setKey(filter.length - 1);
	// 	}
	// };

	// const handleRight = () => {
	// 	if (key === 0 || key < filter.length) {
	// 		setKey(key + 1);
	// 	}
	// 	if (key === filter.length - 1) {
	// 		setKey(0);
	// 	}
	// };


	return (
		<>
			{
				loading ? (<Box><Loading /></Box>) : (filter?.length === 0 ? (<Box><NoData /></Box>) : (
					<>
						<Box
							sx={{ display: "flex", gap: "5px", justifyContent: "space-between" }}
						>
							<Box sx={{ display: "flex", gap: "5px", padding: "15px" }}>
									<KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem" }} />
								<Typography sx={{ marginTop: "2px", fontSize: "20px" }}>Results</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
							{
								filter?.map((value, key) => (
									(value?.backdrop_path || value?.poster_path) &&
									(<>
										<Box>
											<Image key={key} style={{
												borderRadius: "15px", height: "27rem",
												width: "25rem", margin: "20px 20px", opacity: "0.3"
											}} src={`https://image.tmdb.org/t/p/original/${value?.backdrop_path || value?.poster_path}`} alt="values" width={1000} height={100} />
											<Box sx={{
												position: "relative",
												bottom: "12rem",
												width: "100%",
												height: "20%",
												marginLeft: "44px"
											}}>
												<Typography sx={{ fontSize: "25px", color: "yellow" }}>{value.original_title.slice(0, 27)}</Typography>
												<Typography sx={{ fontSize: "17px", wordBreak: "break-word", width: "350px" }}>{value.overview.slice(0, 100)}...</Typography>
												<Link href={{
													pathname: "detailVideo",
													query: {
														id: value.id,
													}
												}}>												<Button className={styles.buttn}>Watch Trailer</Button>
												</Link>
											</Box>
										</Box>
									</>)
								))
							}
						</Box>
					</>
				))
			}
		</>
	);
}

export default MoviesItem;
