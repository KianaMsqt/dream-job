import { CenterFocusStrong } from "@mui/icons-material";
import { TextField, Button, Box } from "@mui/material";

function Contact() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField style={{marginLeft: "15%" }} label="Full Name" />
      <TextField label="Email" />
      <Button variant="contained">Submit</Button>
      <br />
      <TextField label="Message" style = {{width: 1000, marginLeft: "10%" }} multiline rows={5} />
      
    </Box>
  );
}

export default Contact;
