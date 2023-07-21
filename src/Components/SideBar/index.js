// Sidebar.js

import React, { useState } from 'react';
import styles from './popper.module.css'; // Import the CSS module
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Box } from '@mui/material';
import SideBarMenu from './SideBarMenu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { SearchApi } from '@/Redux/actions';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("")

  const dispatch = useDispatch()

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen); // Verify that isOpen state is being toggled correctly
  };


  return (
    <>
    <Box className={styles.header_container}>
      <MenuSharpIcon className={`${styles.icons} ${isOpen ? styles.openIcon : ''}`}  onClick={handleSidebarToggle} />
     <Box sx={{backgroundColor: "transparent"}}>
     <input type="text" className={styles.input_search} placeholder='Search Here' value={search} onChange={(e) => setSearch(e.target.value)} />
     <Link href={`/${search}`}> <SearchIcon onClick={()=> dispatch(SearchApi(search))} className={styles.SearchIcons}/></Link>
     </Box>
    </Box>
    <Box className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <SideBarMenu />
      </Box>
      </>
  );
};

export default Sidebar;
