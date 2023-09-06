import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import styles from "@/Components/MainComponent/slider.module.css"
import NoData from './404';
import Router from 'next/router'
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Loading from './loading';

function DetailVideo({ result }) {
    console.log(result)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <Box>
            {loading && <Loading />}
            <Box sx={{ position: "relative", top: "10px", zIndex: "10" }}>
                <KeyboardArrowLeftIcon
                    onClick={() => Router.back()}
                    sx={{ fontSize: "2rem" }}
                />
                {/* <Typography sx={{ marginTop: "2px", fontSize: "20px" }}>Results</Typography> */}
            </Box>
            <Box sx={{
                display: "flex", justifyContent: "space-evenly",
                flexWrap: "wrap",
            }}>
                {
                    result?.results[0]?.key ?
                        <Box sx={{
                            borderRadius: "15px",
                            height: "100%",
                            background: "#121212",
                            marginTop: "-30px"
                        }}>
                            <iframe
                                className={styles.frame}
                                width="1300"
                                height="680"
                                src={`https://www.youtube.com/embed/${result.results[0].key}?modestbranding=0&autohide=1&rel=0&showinfo=0&controls=0&autoplay=0&modestbranding=0&loop=1&playlist=${result.results[0].key};wmode=transparent`}
                                title="YouTube Trailer"
                                frameborder="0"
                                referrerpolicy="no-referrer-when-downgrade"
                                allowtransparency="true"
                            ></iframe>
                        </Box>
                        : (<Box> <NoData /></Box>)
                }
            </Box>
        </Box>
    )
}

export async function getServerSideProps(context) {

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${context.query.id}/videos`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
        }
    };
    const optionstv = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${context.query.id}/videos`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
        }
    };

    try {
        const response = await axios.request(options)
        const result = response.data
        if (result?.results?.length !== 0) {
            return {
                props: {
                    result  //pass it to the page props
                }
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    try {
        const response = await axios.request(optionstv)
        const result = response.data
        return {
            props: {
                result  //pass it to the page props
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                error: 'An error occurred while fetching data.',
            },
        };
    }

}

export default DetailVideo

