import { BottomNavigation, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";


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
          Produced by -- Kiana -- Eric -- Nick -- Ope ©
        </Typography>
      </Paper>
        
    </BottomNavigation>
  );
}
