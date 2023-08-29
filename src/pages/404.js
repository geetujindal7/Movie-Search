import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Router from 'next/router'


function NoData() {

    const handleBack = {
        borderRadius: "10px",
        backgroundColor: "rgb(118 143 152)",
        borderColor: "transparent",
        width: "7rem",
        color: "black",
        fontSize: "17px"
    }
    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                padding: "5rem",
            }}>
                <Image src="https://cdn.iconscout.com/icon/premium/png-256-thumb/no-data-found-1965030-1662565.png?f=webp" alt="NoData" width={400} height={400} />

            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Typography sx={{ fontSize: "35px", color: "grey" }}>Result Not Found!! </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px"
            }}>
                <Typography sx={{ fontSize: "20px", color: "grey" }}>Whoops... This Information is not available at the moment</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px"
            }}>
                {/* <Link href="/"> */}
                    <button onClick={() => Router.back()} style={handleBack}>Go Back</button>
                {/* </Link> */}
            </Box>
        </>
    )
}
export default NoData
