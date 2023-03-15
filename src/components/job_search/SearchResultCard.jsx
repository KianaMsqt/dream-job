import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function SearchResultCard( {result} ) {
    return (
      <Card sx={{ minWidth: 500 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={result.employer_logo}
          title="Employer's Logo"
          component="img"
        />
        <CardContent>
          
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {result.employer_name}
          </Typography>
          
          <Typography variant="h5" component="div">
            {result.job_title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            { Date(result.job_posted_at_timestamp)}
          </Typography>
          <Typography variant="body2">
            Salary: ---
            <br />
            Location: {result.job_city} , {result.job_state}, {result.job_country}
            <br />
            Employment Type: {result.job_employment_type}
            <br />
            Description: {result.job_description}
  
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={result.job_apply_link} target="_blank">Apply</Button>
        </CardActions>
      </Card>
    );
  }


