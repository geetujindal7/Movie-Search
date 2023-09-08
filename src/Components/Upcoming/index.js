import { Box, Typography } from '@mui/material'
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
    const airToday = useSelector((state) => state.airToday.state)
    const onAir = useSelector((state) => state.onAir.state)
    const topRatedSeries = useSelector((state) => state.topRatedSeries.state)
    const punjabi = useSelector((state) => state.punjabi.state)

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // setLoading(true)
        if (comingSoon === "comingSoon") {
            dispatch(ComingSoon())
        }
        else if (comingSoon === "popular") {
            dispatch(ComingSoon())
        }
        else if (comingSoon === "Series") {
            dispatch(ComingSoon())
        }
        else if (comingSoon === "onAir") {
            dispatch(ComingSoon())
        }
        else if(comingSoon === "topRatedSeries"){
            dispatch(ComingSoon(1))
        }
        else if(comingSoon === "punjabi"){
            dispatch(ComingSoon())
        }
        else {
            dispatch(ComingSoon())
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

    const imagee = (value, key, check) => (
        (value?.backdrop_path || value?.poster_path) &&
        <Box key={key} className={styles.Card}>
            <Link href={{
                pathname: check ? "Newvideo" : "video",
                query: {
                    id: value.id,
                }
            }}>
                <Image style={{ borderRadius: "8px" }} src={(value?.backdrop_path || value?.poster_path) ? `https://image.tmdb.org/t/p/original/${value?.poster_path || value?.backdrop_path}` : "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="} width={250} height={290} alt="s" onError={handleImageError}
                />
            </Link>
        </Box>
    )

    const components = () => {
        if (comingSoon === "comingSoon") {
            return (
                filter?.results?.map((value, key) => {
                    return imagee(value, key, false)
                }))
        }
        else if (comingSoon === "random") {
            return (
                randm?.results?.map((value, key) => {
                    return imagee(value, key, false)
                })
            )
        }
        else if (comingSoon === "Series") {
            return (
                airToday?.results?.map((value, key) => {
                    return imagee(value, key, true)
                })
            )
        }
        else if (comingSoon === "onAir") {
            return (
                onAir?.results?.map((value, key) => {
                    return imagee(value, key, true)
                })
            )
        }
        else if (comingSoon === "topRatedSeries") {
            return (
                topRatedSeries?.results?.map((value, key) => {
                    return imagee(value, key, true)
                })
            )
        }
        else if (comingSoon === "punjabi") {
            return (
                punjabi?.results?.map((value, key) => {
                    return imagee(value, key)
                })
            )
        }
        else {
            return (
                popular?.results?.map((value, key) => {
                    return imagee(value, key)
                })
            )
        }
    }

    const hrefDispatch = [{
        comingSoon: "comingSoon",
        href: "/ComingSoon"
    },
    {
        comingSoon: "random",
        href: "/Favourites"
    },
    {
        comingSoon: "popular",
        href: "/popular"
    },
    {
        comingSoon: "Series",
        href: "/series"
    },
    {
        comingSoon: "onAir",
        href: "/oldSeries"
    },
    {
        comingSoon: "topRatedSeries",
        href: "/TopRatedSeries"
    },
    {
        comingSoon: "punjabi",
        href: "/punjabi"
    },

    ]

    return (
        <Box className={styles.upcoming_header}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h2">{title}</Typography>
                {

                    hrefDispatch.map((val, key) => (
                        <React.Fragment key={key}>
                            {comingSoon === val.comingSoon && <Link href={val.href}>
                                <KeyboardArrowRightIcon sx={{fontSize: "2.5rem"}} onClick={() => dispatch(ComingSoon())} />
                            </Link>}
                        </React.Fragment>
                    ))
                }
            </Box>
            <Box className={styles.card_container}>
                {
                    loading ? <><div style={{ display: "flex", justifyContent: "center", width: "100%", height: "250px", marginTop: "90px" }}><CircularProgress style={{ color: "white" }} /></div></> : components()
                }
            </Box>

        </Box>
    )
}

export default React.memo(Upcoming)