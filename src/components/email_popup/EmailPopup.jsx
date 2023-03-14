function EmailPopup() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Surname" variant="outlined" />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="job description"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="location" variant="outlined" />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="minimum salary"
          variant="outlined"
        />
      </div>
      <div>
        <TextField id="outlined-basic" label="email" variant="outlined" />
      </div>
      <Button variant="contained">Save Job Search</Button>
    </Box>
  );
}

export default EmailPopup;
