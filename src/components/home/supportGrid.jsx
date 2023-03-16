import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function CareerSupport() {
  return (
    <>
      <Grid container spacing={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="../assets/course.jpg"
            title="browse courses"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Upskill with Courses
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Invest in your future with hundreds of courses on offer to help
              you achieve your career dreams!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Browse Courses</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="../assets/resume.jpg"
            title="cv builder"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CV Builder
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Use our free templates to help you craft your your very own job
              winning CV!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Browse CV's</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="../assets/career.jpg"
            title="career advice"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Career Advice
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Latest articles on career progression, mental health and securing
              your perfect job!!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Browse Articles</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
