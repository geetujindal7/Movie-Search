import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "@/Components/Movies/MovieItem.module.css"
import axios from 'axios'
import Loading from '@/pages/loading'
import RelatedDetails from '@/Components/RelatedDetails'
import Router from 'next/router'
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { AppContext } from '@/Components/AppContext'

function Detail({ result }) {

    const filter = useSelector((state) => state.searchApi.state)
    const router = useRouter()
    const { detail } = router.query
    const data = filter.filter((e) => e.id == detail)
    const [loading, setLoading] = useState(true)
    const { setIsOpen } = useContext(AppContext);
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [result])

    return (
        <>
            {loading ? <Loading /> : (
                <Box onClick={() => setIsOpen(false)}>
                    {/* <Box sx={{ position: "relative", top: "10px", zIndex: "10" }}>
                        <KeyboardArrowLeftIcon */}
                            {/* onClick={() => Router.back()}
                            sx={{ fontSize: "2rem" }} */}
                        {/* /> */}
                        {/* <Typography sx={{ marginTop: "2px", fontSize: "20px" }}>Results</Typography> */}
                    {/* </Box> */}
                    {

                        <>

                            <Box className={styles.mainimage}>
                                <Box>
                                    {
                                        result.results.length !== 0 ? (<Box>
                                            <iframe
                                                className={styles.frame}
                                                width="1450"
                                                height="680"
                                                src={`https://www.youtube.com/embed/${result.results[0].key}?modestbranding=0&autohide=1&rel=0&showinfo=0&controls=0&autoplay=0&modestbranding=0&loop=1&playlist=${result.results[0].key};wmode=transparent`}
                                                title="YouTube Trailer"
                                                frameborder="0"
                                                allowtransparency="true"
                                            ></iframe>
                                        </Box>) : <Image style={{ borderRadius: "8px", width: "100%", height: "83vh", opacity: "0.6"}} src={data[0].backdrop_path ? `https://image.tmdb.org/t/p/original/${data[0].backdrop_path}` : `https://image.tmdb.org/t/p/original/${data[0].poster_path}`} alt="values" width={1100} height={450} />
                                    }
                                </Box>
                                {/* <Box sx={{ position: "relative", bottom: "14rem", padding: "18px" }}>
                                <Typography className={styles.overview_title}>{`${data[0].title}`}</Typography>
                            </Box> */}
                            </Box>
                            <Box>
                                <RelatedDetails data={data} />
                            </Box>
                        </>

                    }
                </Box>
            )

            }
        </>
    )
}

export async function getServerSideProps(context) {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${context.query.detail}/videos`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
        }
    };

    const response = await axios.request(options);
    const result = response.data
    return {
        props: {
            result,
        },
    };
}

export default Detail
