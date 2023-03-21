import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function SupportGrid() {
  return (
    <>
      <br></br>
      <br></br>
      <h1 align="center">Career Support for You</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnGap={10}
      >
        <Card
          sx={{
            maxWidth: 450,

            borderRadius: 5,
            boxShadow: 5,
            margin: 5,
          }}
        >
          <CardMedia
            sx={{ height: 300 }}
            image={require("./course.jpg")}
            title="browse courses"
          />
          <CardContent align="center">
            <Typography gutterBottom variant="h4" component="div">
              <b> Upskill with Courses</b>
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Invest in your future with courses on offer to help you achieve
              your career dreams!
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              style={{ margin: "0 auto", display: "flex" }}
              variant="contained"
              href="https://www.reed.co.uk/courses/?itm_source=js_signedout_homepage&itm_medium=jobseeker&itm_campaign=homepage_banner&itm_content=findtherightcourse"
              target="_blank"
            >
              Browse Courses
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            maxWidth: 450,
            borderRadius: 5,
            boxShadow: 5,
            margin: 5,
          }}
        >
          <CardMedia
            sx={{ height: 300 }}
            image={require("./resume.jpg")}
            title="cv builder"
          />
          <CardContent align="center">
            <Typography gutterBottom variant="h4" component="div">
              <b>CV Builder</b>
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Use our free templates to help you craft your your very own job
              winning CV!
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              style={{ margin: "0 auto", display: "flex" }}
              variant="contained"
              href="https://www.reed.co.uk/career-advice/free-cv-template/"
              target="_blank"
            >
              Browse CV's
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            maxWidth: 450,
            borderRadius: 5,
            boxShadow: 5,
            margin: 0,
          }}
        >
          <CardMedia
            sx={{ height: 300 }}
            image={require("./career.jpg")}
            title="career advice"
          />
          <CardContent align="center" sx={{ padding: 3 }}>
            <Typography gutterBottom variant="h4" component="div">
              <b>Career Advice</b>
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Latest articles on career progression, mental health and securing
              your perfect job!
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              style={{ margin: "0 auto", display: "flex" }}
              variant="contained"
              href="https://www.reed.co.uk/career-advice/how-to-manage-your-mental-health-whilst-jobseeking/"
              target="_blank"
            >
              Browse Articles
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
