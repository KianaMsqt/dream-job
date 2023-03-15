import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchFields({
  searchQuery
}){

  const [jobTitle, setJobTitle] = React.useState("");
  const [location, setLocation] = React.useState("");
  
  const handleJobTitleChange = event => {
    setJobTitle(event.target.value);
  };
  
  const handleLocationChange = event => {
    setLocation(event.target.value);
  };
  
  const submitSearch = (event) => {
    event.preventDefault();
    searchQuery(`${jobTitle} in ${location}`);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          className="outlined-basic" 
          label="Job Title" 
          variant="outlined" 
          onChange={handleJobTitleChange}
        />
        <TextField 
          className="outlined-basic" 
          label="Location" 
          variant="outlined" 
          onChange={handleLocationChange}
          />
        <Button 
          variant="contained"
          onClick={submitSearch}
          >
            Search Jobs
        </Button>
      </Box>
    </>
  );
}
