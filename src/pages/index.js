// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import MainComponent from '@/Components/MainComponent'
import Random from '@/Components/Random'
import Sidebar from '@/Components/SideBar'
import Upcoming from '@/Components/Upcoming'
import { ComingSoon, randomMov } from '@/Redux/actions'
import { Box } from '@mui/material'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  
  return <>
      <Box>
        <Sidebar />
        <MainComponent /> 
        <Upcoming comingSoon = {"comingSoon"} ComingSoon = {ComingSoon} title={"Coming Soon"}/>
        <Upcoming ComingSoon = {randomMov} title={"Favourite"}/>
      </Box>
  </>
}
