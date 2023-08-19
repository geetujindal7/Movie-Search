import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function MainComponent() {
    return (
        <>
            <Box sx={{
                position: "relative",
                top: "5rem",
                left: "68rem",
                fontSize: "2.5rem",
                display: "inline"
            }}>
                The Soul Conductor
            </Box>
            <Box sx={{
                display: "flex", marginTop: "-41px",
                background: "linear-gradient(rgb(17 17 17) 3%, rgb(49 74 125 / 0%) 18.6%),linear-gradient(180.13deg, rgb(67 75 92 / 0%) 62.57%, rgb(37 5 5) 88.89%);"
            }}>

                <Image style={{ opacity: "0.4", borderRadius: "0% 60%" }} src="https://www.themoviedb.org/t/p/w780/4df9E3pi99xuD2xSKIj7Mpz8wR9.jpg" width={2800} height={400} alt="image" />
                {/* <Box sx={{
                    background: "linear-gradient(rgb(12 12 13) 3%, rgba(13, 14, 16, 0) 18.6%),linear-gradient(180.13deg, rgb(67 75 92 / 0%) 62.57%, rgb(11 11 11) 88.89%)"
                }}></Box> */}
                {/* <Box>
        The Soul Conductor
    </Box> */}
            </Box>
            <Box sx={{marginTop: "3rem"}}>
                <Image src="https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/kaalkoot_launch_03_cta-14x3-1690815691064.jpg?imformat=chrome" width={1200} height={200} alt="image"/>
            </Box>
        </>
    )
}

export default MainComponent
