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
import MovieItems from '@/Components/Movies/MovieItems'

const User = ({params}) => {
  const router = useRouter()
  const { search } = router.query

  const filter = useSelector((state) => state.searchApi.state)
  const [data, setData] = useState(filter)

  useEffect(() => {
    setData(filter)
  }, [filter])
  
  return (
<>
    {!filter?.error ? (<MovieItems filter={filter} data={data} search ={search}/>) : (
      <Box>No Data Found</Box>
    )
    }
    </>
  )
}

export default User