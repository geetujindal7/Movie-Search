/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { options } from '@/pages/modal'
import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "@/styles/search.module.css"
import ActorItems from '@/Components/Actors/ActorItems'

const User = ({}) => {
  const router = useRouter()
  const { search, select } = router.query
  
  return (
<>
    { select === "Actor" ? (
      <ActorItems search ={search}/>) : ("ebhke" )
    }
    </>
  )
}

export default User