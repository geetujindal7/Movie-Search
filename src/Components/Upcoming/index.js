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
    const popular = useSelector((state) => state.popular.state)

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // setLoading(true)
        if (comingSoon === "comingSoon") {
            dispatch(ComingSoon(50, "Action", "1", "2023"))
        }
        else if (comingSoon === "popular") {
            dispatch(ComingSoon())
        }
        else {
            dispatch(ComingSoon(50, "most_pop_movies"))
        }
    }, [])

    const handleImageError = (e) => {
        e.target.srcset = "",
            e.target.src = "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="
    };

    useEffect(() => {
        setLoading(true)
        if (filter && randm) {
            setLoading(false)
        }
    }, [filter, randm])

    const components = () => {
        if (comingSoon === "comingSoon") {
            return (
                filter?.results?.map((value, key) => {
                    return (
                        value?.primaryImage?.url &&
                        <Box key={key} className={styles.Card}>
                            <Image style={{ borderRadius: "12px" }} src={value?.primaryImage?.url} width={250} height={300} alt="s" />
                        </Box>
                    )
                }))
        }
        else if (comingSoon === "random") {
            return (
                randm?.map((value, key) => {
                    return (
                        value?.primaryImage?.url &&
                        <Box key={key} className={styles.Card}>
                            <Image style={{ borderRadius: "12px" }} src={value?.primaryImage?.url ? value?.primaryImage?.url : "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="} width={250} height={300} alt="s" onError={handleImageError}
                            />
                        </Box>
                    )
                })
            )
        }
        else {
            return (
                popular?.results?.map((value, key) => {
                    return (
                        value?.backdrop_path &&
                        <Box key={key} className={styles.Card}>
                            <Image style={{ borderRadius: "12px" }} src={value?.backdrop_path ? `https://image.tmdb.org/t/p/original/${value?.poster_path || value?.backdrop_path}` : "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="} width={250} height={300} alt="s" onError={handleImageError}
                            />
                        </Box>
                    )
                })
            )
        }
    }

    return (
        <Box className={styles.upcoming_header}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ fontSize: "20px", }}>{title}</Box>
                {
                    comingSoon==="comingSoon" ? <Link href={"/ComingSoon"}>
                        <KeyboardArrowRightIcon onClick={() => dispatch(ComingSoon(50, "Action", "1", "2023"))} />
                    </Link> : (comingSoon === "random" ? <Link href={"/Favourites"}>
                        <KeyboardArrowRightIcon onClick={() => dispatch(ComingSoon(50, "most_pop_movies"))} />
                    </Link> : <Link href={"/popular"}>
                        <KeyboardArrowRightIcon onClick={() => dispatch(ComingSoon())} />
                    </Link>)
                }
            </Box>
            <Box className={styles.card_container}>
                {
                    loading ? <><div style={{ display: "flex", justifyContent: "center", width: "100%", height: "250px", marginTop: "80px" }}><CircularProgress style={{color: "white"}}/></div></> : components()
                }
            </Box>

        </Box>
    )
}

export default React.memo(Upcoming)