import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { right } from "@popperjs/core";

export default function SearchResultCard({ result }) {
  return (
    <Card
      sx={{ minWidth: 100, padding: 5, border: "1px solid blue", margin: 4 }}
    >
      <CardMedia
        sx={{ width: 200}}
        image={result.employer_logo}
        title="Employer's Logo"
        component="img"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {result.employer_name}
        </Typography>

        <Typography sx={{ color: "blue" }}variant="h5" component="div">
        <b>{result.job_title}</b>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {Date(result.job_posted_at_timestamp)}
        </Typography>
        <Typography variant="h6">
          <b>Salary:</b> £30,000
          <br />
          <b>Location:</b> {result.job_city} , {result.job_state},{" "}
          {result.job_country}
          <br />
          <b>Employment Type:</b> {result.job_employment_type}
          <br />
          <br />
          <b>Description:</b> {result.job_description}
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={result.job_apply_link} target="_blank">
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}
