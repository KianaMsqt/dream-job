import { BottomNavigation, Typography, BottomNavigationAction } from "@mui/material";
import Paper from "@mui/material/Paper";
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from "@mui/material/styles"
import { Timeline } from "@mui/icons-material";
import { Box } from "@mui/system";


export default function Footer() {


  return (
    <BottomNavigation> 
  
      <Paper sx={{marginTop: 'calc(15% + 60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#e1f5fe' 
        }} component="footer" square variant="outlined">

        <Typography variant="caption" color="#1338BE" padding={50}>
          Produced by  Kiana,  Eric,  Nick,  Ope     © {new Date().getFullYear()}

        </Typography>
        <Box sx={{paddingLeft: 60, }}>
              <GitHubIcon sx={{color: "#1338BE",'&:hover': {color: 'red',}}} onClick={event =>  window.location.href='https://github.com/KianaMsqt/dream-job'} />
              <Timeline sx={{marginLeft: 4, color: "#1338BE",'&:hover': {color: 'red',}}} onClick={event =>  window.location.href='https://github.com/KianaMsqt/dream-job/actions'} />
        </Box>
      </Paper>
    </BottomNavigation>
  );
}
