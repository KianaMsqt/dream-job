import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Timeline } from "@mui/icons-material";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <Paper sx={{
      marginTop: 'calc(15% + 60px)',
      width: '100%',
      position: 'fixed',
      bottom: 0,
      backgroundColor: '#e1f5fe' 
      }} component="footer" square variant="outlined">
      <Box sx={{textAlign: "center"}}>
        <Typography variant="caption" color="#1338BE">
          Produced by  Kiana,  Eric,  Nick,  Ope     © {new Date().getFullYear()}
        </Typography>
      </Box>
      <Box sx={{textAlign: "center"}}>
            <GitHubIcon sx={{color: "#1338BE",'&:hover': {color: 'red',}}} onClick={event =>  window.location.href='https://github.com/KianaMsqt/dream-job'} />
            <Timeline sx={{marginLeft: 4, color: "#1338BE",'&:hover': {color: 'red',}}} onClick={event =>  window.location.href='https://github.com/KianaMsqt/dream-job/actions'} />
      </Box>
    </Paper>
  );
}
