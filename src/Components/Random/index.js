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

function Random({ handleGenreChange }) {
    const [genre, setgenre] = useState([]);
    const [category, setCategory] = useState('most_pop_movies');

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
        <Box sx={{ width: "18rem", height: "100%", backgroundColor: "#ffffff40", padding: "20px", color: "white", marginTop: "4.5rem" }}>
            <Box>Filters</Box>
            <Box sx={{ margin: "40px 0px 20px 0px" }}>List</Box>
            {
                genre.map((value, key) => (
                    <Box key={key}>
                        {value && <FormControl>
                            <RadioGroup
                                value={category}
                                onChange={handleChange}
                            >
                                <FormControlLabel sx={{textTransform: "uppercase"}} value={value} control={<Radio />} label={value.replace(/[0-9]|_/g, ' ')} />
                            </RadioGroup>
                        </FormControl>}
                    </Box>
                ))
            }
        </Box>
    );
}

export default Random;