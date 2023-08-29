import React from 'react'
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import styles from "@/Components/MainComponent/slider.module.css"
import NoData from './404';

function DetailVideo({ result }) {
    return (
        <Box sx={{ marginTop: "1rem" }}>
            <Box sx={{
                display: "flex", justifyContent: "space-evenly",
                flexWrap: "wrap",
            }}>
                {
                    result?.results[0]?.key ?
                        <Box sx={{
                            borderRadius: "15px",
                            height: "100%",
                            background: "grey"
                        }}>
                            <iframe
                                width="1300"
                                height="700"
                                src={`https://www.youtube.com/embed/${result.results[0].key}?modestbranding=0&autohide=1&rel=0&showinfo=0&controls=0&autoplay=0&modestbranding=0&loop=1&playlist=${result.results[0].key};wmode=transparent`}
                                title="YouTube Trailer"
                                frameborder="0"
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

    const response = await axios.request(options)
    const result = response.data
    return {
        props: {
            result  //pass it to the page props
        }
    }
}

export default DetailVideo
