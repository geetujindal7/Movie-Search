/* eslint-disable react-hooks/exhaustive-deps */
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Slide,
    ThemeProvider,
    Typography,
    createTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "@/Components/Upcoming/upcoming.module.css";
import axios from "axios";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function ComingSoonFilters({ handleGenreChange }) {
    const [genre, setgenre] = useState([]);
    const [category, setCategory] = useState('Action');
    const [id, setId] = useState(28)
    // const [years, setYear] = useState("2023")
    // const year = ["2020", "2021", "2022", "2023", "2024", "2025"]

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const theme = createTheme({
        components: {
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        backgroundColor: '#121212',
                        color: "#c3c3c3",
                        '& .PrivateSwitchBase-root': {
                            backgroundColor: '#121212',
                            color: "grey",
                        }
                    },
                },
            }
        }
    });
    // useEffect(() => {
    //     handleGenreChange(category, years)
    // }, [category, years])

    // const handleYearChange = (event) => {
    //     setYear(event.target.value)
    // }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        handleGenreChange(category, id)
        setOpen(false);
    };

    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/genre/movie/list',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Q5NTBmZWFkOTdhOWExZGY1MDkxYzhjYWE3MTcxZiIsInN1YiI6IjY0YmJhOTRiNThlZmQzMDBhY2UxNWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjCdrGAmI8x4ke-TMl3eimgJlrAjJqEzsy19UyT42ro'
            }
          };
        try {
            const response = await axios.request(options);
            setgenre(response.data.genres);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Button style={{
                    color: "white",
                    borderColor: "white"
                }} variant="outlined" onClick={handleClickOpen}>
                    Filters
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    style={{ width: "100%" }}
                    PaperProps={{
                        style: {
                            backgroundColor: 'red !important', // Change this to your desired background color
                        },
                    }}
                >
                    <DialogTitle sx={{ borderRadius: "8px" }} id="alert-dialog-title">
                        {"Filters"}
                    </DialogTitle>
                    <DialogContent >
                        <Box sx={{ margin: "9px 0px 13px 0px" }}>CATEGORIES</Box>
                        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                            {
                                genre.map((value, key) => (
                                    <Box key={key}>
                                        {value && <FormControl>
                                            <RadioGroup
                                                value={category}
                                                onChange={handleChange}
                                                onClick={() => setId(value.id)}
                                            >
                                                <FormControlLabel style={{ width: "120px" }} value={value.name} control={<Radio />} label={value.name} />
                                            </RadioGroup>
                                        </FormControl>}
                                    </Box>
                                ))
                            }
                        </Box>
                        {/* <Box>
                            <Box sx={{ margin: "9px 0px 13px 0px" }}>
                                YEAR
                            </Box>
                            {
                                year.map((value, key) => (
                                    <FormControl key={key}>
                                        <RadioGroup
                                            value={years}
                                            onChange={handleYearChange}
                                        >
                                            <FormControlLabel value={value} control={<Radio />} label={value} />
                                        </RadioGroup>
                                    </FormControl>
                                ))
                            }
                        </Box> */}
                    </DialogContent>
                    <DialogActions sx={{ borderRadius: "8px", justifyContent: "center", marginBottom: "10px" }}>
                        <Button onClick={handleClose} autoFocus style={{
                            color: "white",
                            borderColor: "white"
                        }} variant="outlined">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </>
    );
}

export default ComingSoonFilters;