import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import styles from '@/Components/Upcoming/upcoming.module.css'
import { useDispatch, useSelector } from 'react-redux'
// import { ComingSoon } from '@/Redux/actions';
import Image from 'next/image';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';

function Upcoming({title, comingSoon, ComingSoon}) {

    const dispatch = useDispatch();
    const filter = useSelector((state) => state.comingSoon.state)
    const randm = useSelector((state) => state.randomMovie.state)

    useEffect(() => {
        dispatch(ComingSoon(12))
    },[])

    return (
        <Box className={styles.upcoming_header}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ fontSize: "23px", marginLeft: "10px" }}>{title}</Box>
                {
                    comingSoon ? <Link href={"/ComingSoon"}>        
                <KeyboardArrowRightIcon onClick={() => dispatch(ComingSoon(50))}/>
                </Link> : <Link href={"/Favourites"}>        
                <KeyboardArrowRightIcon onClick={() => dispatch(ComingSoon(50))}/>
                </Link>
                }
            </Box>
            <Box className={styles.card_container}>
                {
                    comingSoon ? filter?.map((value, key) => {
                        return (
                            value?.primaryImage?.url &&
                            <Box key={key} className={styles.Card}>
                                <Image style={{ borderRadius: "12px" }} src={value?.primaryImage?.url} width={250} height={300} alt="s" />
                            </Box>
                        )
                    })
                    : 
                    (
                        randm?.map((value, key) => {
                        return (
                            value?.primaryImage?.url &&
                            <Box key={key} className={styles.Card}>
                                <Image style={{ borderRadius: "12px" }} src={value?.primaryImage?.url} width={250} height={300} alt="s" />
                            </Box>
                        )
                    })
                    )
                }
            </Box>

        </Box>
    )
}

export default Upcoming