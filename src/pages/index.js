// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import MainComponent from '@/Components/MainComponent'
import Sidebar from '@/Components/SideBar'
import Upcoming from '@/Components/Upcoming'
import { Box } from '@mui/material'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return <>
      <Box>
        <Sidebar />
        <MainComponent /> 
        <Upcoming />
      </Box>
  </>
}
