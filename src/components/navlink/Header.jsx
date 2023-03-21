import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navlink">
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: "red",
                    background: "light-blue",
                    padding: "10px",
                  })}
                  end
                >
                  Job Search
                </NavLink>
              </li>
              <li className="navlink">
                <NavLink
                  to="/contact"
                  style={({ isActive }) => ({
                    color: "red",
                    background: "light-blue",
                    padding: "10px",
                  })}
                  end
                >
                  Contact
                </NavLink>
              </li>
              <li className="navlink">
                <NavLink
                  to="/subscribe"
                  style={({ isActive }) => ({
                    color: "red",
                    background: "light-blue",
                    padding: "10px",
                  })}
                  end
                >
                  Subscribe
                </NavLink>
                <NavLink
                  to="/careersupport"
                  style={({ isActive }) => ({
                    color: "red",
                    background: "light-blue",
                    padding: "10px",
                  })}
                  end
                >
                  Career
                </NavLink>
                <NavLink
                  to="/homehero"
                  style={({ isActive }) => ({
                    color: "red",
                    background: "light-blue",
                    padding: "10px",
                  })}
                  end
                >
                  Homepage
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
