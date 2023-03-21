import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import axios from "axios";
import { fontSize } from "@mui/system";
// import { fakeApiReturnData, makeFakeApiRequest } from '../../utils/fakeApi';

export default function SearchFields(props) {
  const [jobTitle, setJobTitle] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();

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
            image={require("./homehero.jpg")}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 200,
              left: 500,
              width: "60%",
              color: "white",
              borderBlockColor: "white",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              padding: "20px",
              margin: "20px",
              textAlign: "center",
              label: { color: "white" },
              input: { color: "white" },
              "& > :not(style)": { m: 1, width: "30ch", color: "white" },
            }}
            component="form"
            noValidate
            autoComplete="off"
            width="200px"
            onSubmit={submitSearch}
          >
            <TextField
              fullWidth
              sx={{
                input: { color: "white" },
                input: { fontSize: "2rem" },
                label: { color: "white" },
                label: { fontSize: "1.5rem" },
              }}
              className="outlined-basic"
              label="Job Title"
              variant="outlined"
              fontSize="6em"
              size="medium"
              borderBlockColor="white"
              onChange={handleJobTitleChange}
            />
            <TextField
              sx={{
                input: { color: "white" },
                input: { fontSize: "2rem" },
                label: { color: "white" },
                label: { fontSize: "1.5rem" },
              }}
              className="outlined-basic"
              label="Location"
              variant="outlined"
              size="medium"
              onChange={handleLocationChange}
            />
            <Button variant="contained" type="submit">
              Search Jobs
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}
