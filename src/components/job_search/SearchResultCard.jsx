import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
    return (
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            Software Developer
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Date Posted
          </Typography>
          <Typography variant="body2">
            Salary: £30000
            <br />
            Location: London
            <br />
            Job Type: Permanent
            <br />
            Description: job descrption text goes here
  
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See More</Button>
        </CardActions>
      </Card>
    );
  }


