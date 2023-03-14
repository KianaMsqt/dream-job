import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import TimelineIcon from "@mui/icons-material/Timeline";
export default function Footer() {

  return (
    <BottomNavigation> 
  
      <p className="pcontainer">
          Produced by -- Kiana -- Obinna -- Nick -- Ope ©
          <div>
            <BottomNavigationAction label="GitHub" to='https://github.com/KianaMsqt/dream-job' icon={<GitHubIcon />} />
            <BottomNavigationAction label="Timeline" to='https://github.com/KianaMsqt/dream-job/branches' icon={<TimelineIcon />} />
          </div>
        </p>
        
    </BottomNavigation>
  );
}
