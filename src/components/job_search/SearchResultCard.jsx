import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SearchResultCard({ result }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Convert date format to dd/mm/yyyy
  const dateString = result.job_posted_at_datetime_utc;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-GB');

  return (
    <div style={{ margin: "1%" }}>
      <Card
        sx={{
          minWidth: 100,
          maxWidth: 1400,
          padding: 5,
          // border: "1px solid black",
          borderRadius: 8,
          boxShadow: 8,
          margin: 5,
          mx: "auto",
        }}
      >
        <CardMedia
          sx={{
            display: "flex",
            justifyContent: "right",
            height: "50px",
            width: "auto",
          }}
          image={result.employer_logo}
          title="Employer's Logo"
          component="img"
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {result.employer_name}
          </Typography>

          <Typography sx={{ color: "blue" }} variant="h5">
            <b>{result.job_title}</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Job posted at: {formattedDate}
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
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Button
            variant="contained"
            href={result.job_apply_link}
            target="_blank"
          >
            Apply
          </Button>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6"><b>About the Job</b></Typography>
            <Typography>{result.job_description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
