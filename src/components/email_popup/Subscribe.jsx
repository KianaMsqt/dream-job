import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Subscribe() {
  return (
    <Card sx={{ minWidth: 500 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="600"
          image={require("./blueMountain.jpg")}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 230,
            left: 100,
            right: 100,
            width: "80%",
            bgcolor: "rgba(0, 0, 0, 0.54)",
            color: "white",
            padding: "10px",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5">Subscribe!</Typography>
          <Typography variant="body2">Add Job Search in here</Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Added text to add if needed
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
