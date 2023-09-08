import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import styles from "@/Components/MainComponent/slider.module.css"
import { CircularProgress } from '@mui/material';
import Loading from './loading';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";
import Router from 'next/router'
import NoData from './404';

function Trailer({ result, error }) {
    const [loading, setLoading] = useState(true)

    const handleImageError = (e) => {
        console.log("image error")
        // e.target.srcset = "",
        //   e.target.src = "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="
    };

    useEffect(() => {
        if ((result || error)) {
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        }

    }, [result, error])
    return (
        <>
            {loading && <Loading />}
            <Box sx={{ margin: "30px 5rem" }} >
                <Box>
                    <Box sx={{ marginBottom: "30px" }}>
                        {/* <KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem" }} /> */}
                        <Typography variant="h2">Results</Typography>
                    </Box>
                </Box>
                {
                    (result?.results?.length !== 0 && !error) ?
                        (<Box>
                            <Box sx={{
                                display: "flex",
                                gap: "30px",
                                flexWrap: "wrap",
                            }}>

                                {
                                    result?.results?.slice(0, 5).map((value, key) => (
                                        <Box key={key} sx={{
                                            borderRadius: "8px",
                                            background: "#121212",
                                            width: "400px"
                                        }}>
                                            <iframe
                                                className={styles.iframe}
                                                width="400"
                                                height="260"
                                                src={`https://www.youtube.com/embed/${value.key}?modestbranding=0&autohide=1&rel=0&showinfo=0&controls=0&autoplay=0&modestbranding=0&loop=1&playlist=${value.key};wmode=transparent`}
                                                title="YouTube Trailer"
                                                frameborder="0"
                                                allowtransparency="true"
                                                onError={handleImageError}
                                            ></iframe>
                                            <Typography variant="h4" sx={{
                                                width: "100%",
                                                textAlign: "center",
                                                margin: "12px 0px",
                                                wordWrap: "break-word",
                                            }}>{value.name}</Typography>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>) : <NoData />
                }
            </Box>

        </>
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
    // let result;
    // axios
    //     .request(options)
    //     .then(function (response) {
    //         result = response.data
    //         return {
    //             props: {
    //                 result  //pass it to the page props
    //             }
    //         }
    //     })
    //     .catch(function (error) {
    //         result = error
    //         return {
    //             props: {
    //                 result  //pass it to the page props
    //             }
    //         }
    //     });

    try {
        const response = await axios.request(options)
        const result = response.data
        return {
            props: {
                result,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                error: 'An error occurred while fetching data.',
            },
        };
    }

    // const response = await axios.request(options)
    // const result = response.data
    // return {
    //     props: {
    //         result  //pass it to the page props
    //     }
    // }
}

export default Trailer

