import { Box, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import style from '@/Components/MainComponent/slider.module.css'


function Review({ getReviews }) {
    return (
        <>
            {getReviews?.results?.length !== 0 && (<Box className={style.review}>
                <Box className={style.userHeading}>User Reviews</Box>
                <Box className={style.reviewCont}>
                    {
                        getReviews?.results?.map((val, key) => (
                            <Box key={key} className={style.reviewCard}>
                                <Box sx={{ margin: "0px 0px 14px 8px", display: "flex", gap: "20px" }}>
                                    <StarIcon sx={{ color: "#c39400" }} />
                                    <Typography sx={{ marginTop: "2px" }}>{val?.author_details?.rating || 9}/10</Typography>

                                </Box>
                                <Box sx={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
                                    <Image
                                        style={{
                                            width: "7%",
                                            height: "3rem",
                                            borderRadius: "50%",
                                        }}
                                        src={val?.author_details?.avatar_path ? `https://image.tmdb.org/t/p/original/${val?.author_details?.avatar_path}` : `https://img.lovepik.com/element/40128/7461.png_1200.png`}
                                        width={1000}
                                        height={1000}
                                        alt="primaryImage"
                                    />
                                    <Typography sx={{
                                        marginTop: "12px",
                                        fontWeight: "700"
                                    }}>{val?.author}</Typography>
                                </Box>
                                <Typography sx={{color: "#727272"}}>{val?.content}</Typography>
                            </Box>
                        ))
                    }
                </Box>

            </Box>)
            }
        </>
    )
}

export default Review