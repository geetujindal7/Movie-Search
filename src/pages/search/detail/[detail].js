import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "@/Components/Movies/MovieItem.module.css"
import sty from "@/styles/search.module.css"

function Detail() {

    const overview = {
        fontSize: "17px",
        padding: "10px 0rem",
        color: "#7d7d7d",
        // marginLeft: "24px"

    }

    const overview_title = {
        fontSize: "32px",
    padding: "1rem 0rem",
    color: "rgb(255 255 255)",
    /* font-style: inherit; */
    fontWeight: "500",
}

const filter = useSelector((state) => state.searchApi.state)
console.log(filter)
const router = useRouter()
const { detail } = router.query
const data = filter.filter((e) => e.id == detail)

return (
    <Box className={styles.mainimage}>
        <Box>
            <Image style={{borderRadius: "10px", width: "100%"}} src={`https://image.tmdb.org/t/p/original/${data[0].backdrop_path}`} alt="values" width={1100} height={450} />
        </Box>
        <Box >
            <Typography style={overview_title}>{`${data[0].title} (${data[0].original_title})`}</Typography>
            <Typography style={overview}>{data[0].overview}</Typography>
            <Typography style={overview}>Release Date: {data[0].release_date}</Typography>
            <Typography style={overview}>Average Rating: {data[0].vote_average.toFixed(1)}/10</Typography>
            <Typography style={overview}>Character: {data[0].character}</Typography>
            <Typography style={overview}>Adult Movie: {data[0].adult ? "Yes" : "No"}</Typography>

        </Box>
    </Box>
)
}

export default Detail
