import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import styles from '@/Components/Upcoming/upcoming.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { ComingSoon } from '@/Redux/actions';
import Image from 'next/image';

function Upcoming() {

    const dispatch = useDispatch();
    const filter = useSelector((state) => state.comingSoon.state)
    console.log(filter)

    useEffect(() => {
        dispatch(ComingSoon(50))
    }, [])

    return (
        <Box className={styles.upcoming_header}>
            <Box sx={{ fontSize: "23px", marginLeft: "10px" }}>Coming Soon</Box>
            <Box className={styles.card_container}>

                {
                    filter?.map((value, key) => {
                        return (
                            value?.primaryImage?.url &&
                            <Box key={key} className={styles.Card}>
                                <Image src={value?.primaryImage?.url} width={250} height={300} alt="s" />

                            </Box>
                        )
                    })
                }
            </Box>

        </Box>
    )
}

export default Upcoming