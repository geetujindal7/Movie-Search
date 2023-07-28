/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import styles from './MovieItem.module.css'

function MoviesItem() {
	const filter = useSelector((state) => state.searchMovie.state);
	const [ key, setKey ] = useState(filter?.length - 1);

    useEffect(() => {
      console.log(filter, key)
    }, [filter, key])
    
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
        {console.log(filter?.[0]?.Text ||  filter?.length === 0)}
        {
            filter?.[0]?.Text ||  filter?.length === 0 ? (<Box>No Data Found</Box>) : (<Box>
			<KeyboardDoubleArrowLeftOutlinedIcon onClick={() => handleLeft()} />
			<Box className={styles.mainimage}>
            <img src={filter?.[key]?.Image} alt="values" width={500} height={500} />
            </Box>
			<KeyboardDoubleArrowRightOutlinedIcon onClick={() => handleRight()} />
		</Box>)
        }	
        </>
	);
}

export default MoviesItem;
