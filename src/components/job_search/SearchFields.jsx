import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import axios from "axios";
// import { fakeApiReturnData, makeFakeApiRequest } from '../../utils/fakeApi';

export default function SearchFields(props) {
  const [jobTitle, setJobTitle] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [loading, setLoading] = useState(false);

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();

    setLoading(true);

    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: `${jobTitle} in ${location}`,
        // page: `${page}`,
        page: `1`,
        num_pages: "1",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_JSEARCH,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    // makeFakeApiRequest(true, 2000, fakeApiReturnData)
    // .then(function (response) {
    //   const results = response.data;
    //   setSearchResults(results);
    //   // Call the onSearchResults prop
    //   props.onSearchResults(results);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    axios
      .request(options)
      .then(function (response) {
        // Pass searchResults to access in JobSearch component
        // Call the onSearchResults prop
        props.onSearchResults(response.data.data);

        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <Card sx={{ minWidth: 500 }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="600"
            width="00"
            position="center"
            image={require("./homehero.jpg")}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 230,
              left: 100,
              right: 100,

              color: "white",

              bgcolor: "rgba(0, 0, 0, 0.54)",
              padding: "20px",

              textAlign: "center",
              label: { color: "white" },
              input: { color: "white" },
              "& > :not(style)": { m: 1, width: "40ch", color: "white" },
            }}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={submitSearch}
          >
            <TextField
              fullWidth
              sx={{
                input: { fontSize: "2rem" },
                label: { 
                  color: "white",
                  fontSize: "1.5rem"
                 },
              }}
              className="outlined-basic"
              label="Job Title"
              variant="outlined"
              fontSize="6em"
              size="medium"
              border-color="white"
              onChange={handleJobTitleChange}
            />
            <TextField
              sx={{
                input: { fontSize: "2rem" },
                label: { 
                  color: "white",
                  fontSize: "1.5rem"
                 },
              }}
              className="outlined-basic"
              label="Location"
              variant="outlined"
              size="medium"
              onChange={handleLocationChange}
            />

            <Button variant="contained" type="submit" size="large">
              {loading ? <>Loading...</> : <>Search Jobs</>}
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}
