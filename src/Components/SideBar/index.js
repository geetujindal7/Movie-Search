/* eslint-disable react-hooks/exhaustive-deps */
// Sidebar.js

import React, { useContext, useEffect, useState } from "react";
import styles from "./popper.module.css"; // Import the CSS module
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SideBarMenu from "./SideBarMenu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { SearchApi, SearchMovie, Keyword, SearchTVAction } from "@/Redux/actions";
import { styled } from "@mui/material/styles";
import { AppContext } from "../AppContext";

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("Actor");
  const filter = useSelector((state) => state.keywords.state);
  const [open, setOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(AppContext);
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };
  const [checked, setChecked] = useState(false);

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    // border: '1px solid',
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      border: "1px solid",

      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        border: "1px solid",
      },
    },

    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 29,
      height: 30,
      border: "1px solid",

      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      // backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
      border: "1px solid",
    },
  }));

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (checked) setSelect("Movie");
    else setSelect("Actor");
  }, [checked]);

  // useEffect(() => {
  //   setIsOpen(opened)
  // }, [opened]);

  useEffect(() => {
    setTimeout(() => {
      if (search) {
        dispatch(Keyword(search));
      }
    }, [1000]);
  }, [search]);

  const handleDispatch = () => {
    if (select === "Actor") {
      dispatch(SearchApi(search));
    } else {
      dispatch(SearchMovie(search));
      dispatch(SearchTVAction(search));
    }
    setSearch("");
  };

  const handleInputClick = (val) => {
    if (select === "Actor") {
      dispatch(SearchApi(val));
    } else {
      dispatch(SearchMovie(val));
      dispatch(SearchTVAction(val));
    }
    setOpen(false);
    setSearch("");
  };

  return (
    <>
      <Box className={styles.header_container}>
        <Box onClick={() => setIsOpen(!isOpen)}  sx={{width: "65rem"}}>
        <MenuSharpIcon
          className={`${styles.icons} ${isOpen ? styles.openIcon : ""}`}
          onClick={handleSidebarToggle}
        />
        </Box>
        <Box className={styles.formHeader}>
          <FormGroup className={styles.tooltiponhover}>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} />}
              label={select}
              checked={checked}
              onChange={handleChange}
            />
          </FormGroup>
          <Typography className={styles.tooltip}>
            Click for the {select === "Actor" ? "Movie" : "Actor"}
          </Typography>
          <Box className={styles.dropdown}>
            <input
              type="text"
              className={styles.input_search}
              placeholder={`Search  ${select}`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={() => setOpen(true)}
            />
            {filter?.results.length !== 0 && search && (
              <Box className={styles.dropdownlist}>
                {open &&
                  filter?.results?.map((val, key) => (
                    <Link
                      key={key}
                      href={{
                        pathname: `/search`,
                        query: { select: `${select}`, search: `${val.name}` },
                      }}
                    >
                      <Typography
                        sx={{ margin: "7px", textTransform: "capitalize" }}
                        onClick={() => handleInputClick(val.name)}
                      >
                        {val.name}
                      </Typography>
                    </Link>
                  ))}
              </Box>
            )}
          </Box>
          {
            search ?  <Link
            href={{
              pathname: `/search`,
              query: { select: `${select}`, search: `${search}` },
            }}
          >
            <SearchIcon
              onClick={() => handleDispatch()}
              className={styles.SearchIcons}
            />
          </Link> : <SearchIcon
              className={styles.SearchIcons}
            />
          }
        </Box>
      </Box>
      <Box className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <SideBarMenu setIsOpen={setIsOpen}/>
      </Box>
    </>
  );
};

export default Sidebar;
