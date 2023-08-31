import { Box, Typography } from '@mui/material';
import React from 'react'
import styles from "@/Components/Upcoming/upcoming.module.css"
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { SearchApi } from '@/Redux/actions';

function Celebrities({ result }) {
    const dispatch = useDispatch()
    return (
        <Box className={styles.upcoming_header}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ fontSize: "23px", marginLeft: "10px" }}>Celebrities</Box>
            </Box>
            <Box className={styles.card_container} sx={{ flexWrap: "wrap" }}>
                {
                    result.list?.map((value, key) => {
                        return (
                            value?.primaryImage?.imageUrl &&
                            <Box key={key} className={styles.Card}>
                            <Link href={{ pathname: `/search`, query: { select: "Actor", search: `${value.nameText.text}`}}}>
                                <Image style={{ borderRadius: "12px", opacity: "0.6" }} src={value?.primaryImage?.imageUrl} width={250} height={300} alt="s" onClick={() => dispatch(SearchApi(value.nameText.text))} />
                                <Typography sx={{
                                    position: "relative",
                                    bottom: "2.5rem",
                                    marginLeft: "20px",
                                    color: "white",
                                    fontSize: "18px",
                                    // opacity: "0.7"
                                }}>{value.nameText.text}</Typography>
                                </Link>
                            </Box>
                        )
                    })

                }
            </Box>

        </Box>
    )
}

export async function getServerSideProps() {
    const options = {
        method: 'GET',
        url: 'https://imdb188.p.rapidapi.com/api/v1/getPopularCelebrities',
        headers: {
            'X-RapidAPI-Key': 'bc5b33704amsh5eff8f306d0200ep1fe8d1jsn3377938a8334',
            'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
        }
    }

    const response = await axios.request(options);
    const result = response.data.data
    // const result = await response.text();
    return {
        props: {
            result,
        },
    };
}

export default Celebrities