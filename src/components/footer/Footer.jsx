import { BottomNavigation, Typography, useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";

export default function Footer() {
  const theme = useTheme();

  return (
    <BottomNavigation> 
      <Paper
        sx={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
          position: 'fixed',
          bottom: 0,
          width: '100%',
          padding: theme.spacing(2),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        component="footer"
        square
      >
        <Typography
          variant="caption"
          sx={{ fontFamily: 'Roboto' }}
        >
          Produced by -- Kiana -- Eric -- Nick -- Ope ©
        </Typography>
      </Paper>
    </BottomNavigation>
  );
}
