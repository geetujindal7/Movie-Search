import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Router from 'next/router'


function NoData() {

    const handleBack = {
        borderRadius: "8px",
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
                padding: "2rem",
            }}>
                <Image src="https://cdn.iconscout.com/icon/premium/png-256-thumb/no-data-found-1965030-1662565.png?f=webp" alt="NoData" width={250} height={250} />

            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Typography variant="h5">Result Not Found!! </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px"
            }}>
                <Typography variant="h3">Whoops... This Information is not available at the moment</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px"
            }}>
                {/* <Link href="/"> */}
                    <Button onClick={() => Router.back()} >Go Back</Button>
                {/* </Link> */}
            </Box>
        </>
    )
}
export default NoData
