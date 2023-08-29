/* eslint-disable react-hooks/exhaustive-deps */
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
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

function Random({ handleGenreChange }) {
    const [genre, setgenre] = useState([]);
    const [category, setCategory] = useState('most_pop_movies');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        handleGenreChange(category)
        setOpen(false);
    };

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    useEffect(() => {
        handleGenreChange(category)
    }, [category])

    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/utils/lists',
            headers: {
              'X-RapidAPI-Key': '764509eademsh39464646cc1b53ep154ca9jsnc80276461cfe',
              'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
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
        <><Button style={{
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
                                        <FormControlLabel sx={{textTransform: "capitalize"}}  style={{ width: "250px" }} value={value} control={<Radio />} label={value.replace(/[0-9]|_/g, ' ')}  />
                                    </RadioGroup>
                                </FormControl>}
                            </Box>
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

export default Random;