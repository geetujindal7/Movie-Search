import React from 'react'
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import styles from "@/Components/MainComponent/slider.module.css"

function Trailer({ result }) {
    return (
        <Box sx={{ marginTop: "4rem" }}>
            <Box sx={{
                display: "flex", justifyContent: "space-evenly",
                gap: "30px",
                flexWrap: "wrap",
                margin: "20px"
            }}>

                {
                    result?.results?.map((value, key) => (
                        <Box key={key} sx={{
                            borderRadius: "15px",
                            height: "24rem",
                            background: "grey"
                        }}>
                            <iframe
                                width="430"
                                height="330"
                                src={`https://www.youtube.com/embed/${value.key}?modestbranding=0&autohide=1&rel=0&showinfo=0&controls=0&autoplay=0&modestbranding=0&loop=1&playlist=${value.key};wmode=transparent`}
                                title="YouTube Trailer"
                                frameborder="0"
                            ></iframe>
                            <Typography sx={{
                                width: "100%",
                                textAlign: "center",
                                marginTop: "5px",
                                fontSize: "1.2rem",
                                color: "black"
                            }}>{value.name.slice(0,37)}</Typography>
                        </Box>
                    ))
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

export default Trailer

