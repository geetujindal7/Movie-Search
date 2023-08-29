import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from '@/Components/Upcoming/upcoming.module.css'
import { useDispatch, useSelector } from 'react-redux'
// import { ComingSoon } from '@/Redux/actions';
import Image from 'next/image';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import Loading from '@/pages/loading';
import { CircularProgress } from '@mui/material';


function Upcoming({ title, comingSoon, ComingSoon }) {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.comingSoon.state)
    const randm = useSelector((state) => state.randomMovie.state)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // setLoading(true)
            if (comingSoon === "comingSoon") {
                dispatch(ComingSoon(50, "Crime", "1", "2023"))
            }
            else {
                dispatch(ComingSoon(50, "most_pop_movies"))
            }
    }, [])

    const handleImageError = (e) => {
        console.log("Incorrect Image", e.target.src, e.target)
        e.target.srcset = "",
          e.target.src = "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="
      };

    useEffect(() => {
        setLoading(true)
        console.log("entered")
        if(filter && randm)
        {
            setLoading(false)
        }
    }, [filter, randm])
    
    return (
        <Box className={styles.upcoming_header}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ fontSize: "20px",}}>{title}</Box>
                {
                    comingSoon ? <Link href={"/ComingSoon"}>
                        <KeyboardArrowRightIcon onClick={() => dispatch(ComingSoon(50))} />
                    </Link> : <Link href={"/Favourites"}>
                        <KeyboardArrowRightIcon onClick={() => dispatch(ComingSoon(50))} />
                    </Link>
                }
            </Box>
            <Box className={styles.card_container}>
                {
                    loading ? <><div style={{display: "flex", justifyContent: "center", width: "100%", height: "250px", marginTop:"80px"}}><CircularProgress /></div></> : (
                        comingSoon ? filter?.results?.map((value, key) => {
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
                                        <Image style={{ borderRadius: "12px" }} src={value?.primaryImage?.url ? value?.primaryImage?.url :  "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="} width={250} height={300} alt="s"  onError={handleImageError}
                                         />
                                    </Box>
                                )
                            })
                        )
                    )
                }
            </Box>

        </Box>
    )
}

export default React.memo(Upcoming)