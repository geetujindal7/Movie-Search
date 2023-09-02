import React, { useEffect, useState } from 'react'
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
            <Box
                sx={{ display: "flex", gap: "5px", justifyContent: "space-between" }}
            >
                <Box sx={{ display: "flex", gap: "5px", padding: "19px 9px 0px 3px" }}>
                    <KeyboardArrowLeftIcon onClick={() => Router.back()} sx={{ fontSize: "2rem" }} />
                    <Typography sx={{ marginTop: "2px", fontSize: "20px" }}>Results</Typography>
                </Box>
            </Box>
            {
                    (result?.results?.length !== 0 && !error) ?
                        (<Box>
                            <Box sx={{
                                display: "flex", justifyContent: "space-evenly",
                                gap: "30px",
                                flexWrap: "wrap",
                                margin: "20px"
                            }}>

                                {
                                    result?.results?.slice(0, 5).map((value, key) => (
                                        <Box key={key} sx={{
                                            borderRadius: "8px",
                                            height: "25.5rem",
                                            background: "#121212"
                                        }}>
                                            <iframe
                                                className = {styles.iframe}
                                                width="640"
                                                height="360"
                                                src={`https://www.youtube.com/embed/${value.key}?modestbranding=0&autohide=1&rel=0&showinfo=0&controls=0&autoplay=0&modestbranding=0&loop=1&playlist=${value.key};wmode=transparent`}
                                                title="YouTube Trailer"
                                                frameborder="0"
                                                allowtransparency="true"
                                            ></iframe>
                                            <Typography sx={{
                                                width: "100%",
                                                textAlign: "center",
                                                marginTop: "5px",
                                                fontSize: "1.2rem",
                                                color: "white"
                                            }}>{value.name.slice(0, 37)}</Typography>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>) : <NoData />
            }
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

