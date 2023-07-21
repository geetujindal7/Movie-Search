/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { options } from '@/modal'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const User = ({params}) => {
  const router = useRouter()
  console.log(router, params)
  const { search } = router.query

  const filter = useSelector((state) => state.searchApi.state)
  const [data, setData] = useState(filter)

  return (
    <>
      
      {/* {data.map((e) => (
      <img src={`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} alt={e.poster_path}/>
  ))} */}
    </>
  )
}

export default User