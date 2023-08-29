// Sidebar.js

import React, { useEffect, useState } from 'react';
import styles from './popper.module.css'; // Import the CSS module
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Box, FormControlLabel, FormGroup, Switch, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import SideBarMenu from './SideBarMenu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { SearchApi, SearchMovie } from '@/Redux/actions';
import { styled } from '@mui/material/styles';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("")
  const [select, setSelect] = useState("Actor")

  const dispatch = useDispatch()

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen); // Verify that isOpen state is being toggled correctly
  };
  const [checked, setChecked] = useState(false);


  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    // border: '1px solid',
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      border: '1px solid',

      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        border: '1px solid',

      },
    },

    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 29,
      height: 30,
      border: '1px solid',

      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      // backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
      border: '1px solid',

    },
  }));

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (checked)
      setSelect("Movie")
    else
      setSelect('Actor')
  }, [checked])


  const handleDispatch = () => {
    if (select === "Actor") {
      dispatch(SearchApi(search))
    }
    else {
      dispatch(SearchMovie(search))
    }
    setSearch("")
  }
  return (
    <>
      <Box className={styles.header_container}>
        <MenuSharpIcon className={`${styles.icons} ${isOpen ? styles.openIcon : ''}`} onClick={handleSidebarToggle} />
        <Box className={styles.formHeader}>
          <FormGroup className={styles.tooltiponhover}>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} />}
              label={select}
              checked={checked}
              onChange={handleChange}
            />
          </FormGroup>    
          <Typography className={styles.tooltip}>Click for the {select=== "Actor" ? 'Movie' : 'Actor'}</Typography>
           <input type="text" className={styles.input_search} placeholder={`Search  ${select}`} value={search} onChange={(e) => setSearch(e.target.value)} />
          <Link href={{ pathname: `/search`, query: { select: `${select}`, search: `${search}` } }}> <SearchIcon onClick={() => handleDispatch()} className={styles.SearchIcons} /></Link>
        </Box>
      </Box>
      <Box className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <SideBarMenu />
      </Box>
    </>
  );
};

export default Sidebar;
