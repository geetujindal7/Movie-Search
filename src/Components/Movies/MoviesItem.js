/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import styles from './MovieItem.module.css'
import Image from 'next/image'
import Loading from '@/pages/loading';

function MoviesItem() {
	const filter = useSelector((state) => state.searchMovie.state);
	const [loading, setLoading] = useState(true)
	const [key, setKey] = useState(0);
	console.log(filter)

	useEffect(() => {
		if (filter) {
			setLoading(false)
			// setKey(filter.length - 1)
		}
	}, [filter, key, loading])

	const handleLeft = () => {
		if (key !== 0) {
			setKey(key - 1);
		}
		if (key === 0) {
			setKey(filter.length - 1);
		}
	};

	const handleRight = () => {
		if (key === 0 || key < filter.length) {
			setKey(key + 1);
		}
		if (key === filter.length - 1) {
			setKey(0);
		}
	};

	return (
		<>
			{
				loading ? (<Box><Loading /></Box>) : (filter?.[0]?.Text || filter?.length === 0 ? (<Box>No Data Found</Box>) : (
					<Box className={styles.mainimage}>
						<KeyboardDoubleArrowLeftOutlinedIcon className={styles.icons} onClick={() => handleLeft()} />
						<Box>
							<Image src={filter[key]['Image']} alt="values" width={800} height={800} />
						</Box>
						<KeyboardDoubleArrowRightOutlinedIcon className={styles.icons} onClick={() => handleRight()} />
						<Box className={styles.titleHeader}>
						<Typography className={styles.title}>{filter[key]['Movie Title']}</Typography>
						</Box>
					</Box>
				))
			}
		</>
	);
}

export default MoviesItem;
