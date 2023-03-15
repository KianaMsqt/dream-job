import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchFields() {
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
        <TextField className="outlined-basic" label="Job Title" variant="outlined" />
        <TextField className="outlined-basic" label="Location" variant="outlined" />
        <TextField className="outlined-basic" label="minimum salary" variant="outlined" />
        <Button variant="contained">Search Jobs</Button>
      </Box>
    </>
  );
}
