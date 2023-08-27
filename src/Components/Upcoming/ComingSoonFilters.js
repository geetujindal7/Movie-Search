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
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "@/Components/Upcoming/upcoming.module.css";
import axios from "axios";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function ComingSoonFilters({ handleGenreChange }) {
    const [genre, setgenre] = useState([]);
    const [category, setCategory] = useState('Drama');
    const [years, setYear] = useState("2023")

    const year = ["2020", "2021", "2022", "2023", "2024", "2025"]

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    // useEffect(() => {
    //     handleGenreChange(category, years)
    // }, [category, years])

    const handleYearChange = (event) => {
        setYear(event.target.value)
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        handleGenreChange(category, years)
        setOpen(false);
    };

    const fetchData = async () => {
        const options = {
            method: "GET",
            url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
            headers: {
                "X-RapidAPI-Key": "764509eademsh39464646cc1b53ep154ca9jsnc80276461cfe",
                "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
            },
        };

        try {
            const response = await axios.request(options);
            setgenre(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
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
            >
                <DialogTitle sx={{ borderRadius: "15px"}} id="alert-dialog-title">
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
                                        >
                                            <FormControlLabel style={{ width: "120px" }} value={value} control={<Radio />} label={value} />
                                        </RadioGroup>
                                    </FormControl>}
                                </Box>
                            ))
                        }
                    </Box>
                    <Box>
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
                    </Box>
                </DialogContent>
                <DialogActions sx={{borderRadius: "15px"}}>
                    <Button onClick={handleClose} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ComingSoonFilters;