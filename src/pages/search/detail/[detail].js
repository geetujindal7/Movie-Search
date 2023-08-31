import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "@/Components/Movies/MovieItem.module.css"
import axios from 'axios'
import Loading from '@/pages/loading'
import RelatedDetails from '@/Components/RelatedDetails'

function Detail({ result }) {
    console.log(result)
    const overview = {
        fontSize: "17px",
        padding: "3px 0rem",
        color: "white",
        // marginLeft: "24px"
    }
    const overview_title = {
        fontSize: "38px",
        padding: "1rem 0rem",
        color: "rgb(255 255 255)",
        /* font-style: inherit; */
        fontWeight: "bold",
        width: "32%",
        wordWrap: "break-word",
    }

    const filter = useSelector((state) => state.searchApi.state)
    const router = useRouter()
    const { detail } = router.query
    const data = filter.filter((e) => e.id == detail)
    const [loading, setLoading] = useState(true)
    console.log(filter)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [result])

    return (
        <>
            {
                loading ? <Loading /> : (
                    <>
                        <Box className={styles.mainimage}>
                            <Box>
                                {
                                    result.results.length !== 0 ? (<Box>
                                        <iframe
                                            width="1400"
                                            height="600"
                                            src={`https://www.youtube.com/embed/${result.results[0].key}?modestbranding=0&autohide=1&rel=0&showinfo=0&controls=0&autoplay=0&modestbranding=0&loop=1&playlist=${result.results[0].key};wmode=transparent`}
                                            title="YouTube Trailer"
                                            frameborder="0"
                                        ></iframe>
                                    </Box>) : <Image style={{ borderRadius: "8px", width: "100%", height: "81vh", opacity: "0.2" }} src={data[0].backdrop_path ? `https://image.tmdb.org/t/p/original/${data[0].backdrop_path}` : `https://image.tmdb.org/t/p/original/${data[0].poster_path}`} alt="values" width={1100} height={450} />
                                }
                            </Box>
                            <Box sx={{ position: "relative", bottom: "14rem", padding: "18px" }}>
                                <Typography style={overview_title}>{`${data[0].title} (${data[0].original_title})`}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            // bottom: "17rem",
                            // display: "flex",
                            // justifyContent: "center"
                        }}>
                            <RelatedDetails data={data}/>
                        </Box>
                    </>
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
