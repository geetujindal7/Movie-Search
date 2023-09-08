/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { options } from '@/Redux/modal'
import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "@/styles/search.module.css"
import ActorItems from '@/Components/Actors/ActorItems'
import MoviesItem from '@/Components/Movies/MoviesItem'
import { AppContext } from '@/Components/AppContext'

const User = ({ }) => {
    const router = useRouter()
    const { search, select } = router.query
    const { setIsOpen } = useContext(AppContext);
    
    return (
        <Box onClick={() => setIsOpen(false)}>
            {select === "Actor" ? (
                <ActorItems search={search} />) : (<MoviesItem />)
            }
        </Box>
    )
}

export default User