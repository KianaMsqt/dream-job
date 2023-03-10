import { NavLink } from "react-router-dom";

function Header() {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Dream Job</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="navlink">
                            <NavLink to="/" 
                            style={({ isActive }) => ({
                                color: 'red',
                                background: 'light-blue',
                                padding: '10px'
                            })}
                            end>Job Search</NavLink>
                        </li>
                        <li className="navlink">
                            {/*<a href="/contact">Contact</> */}
                            <NavLink to="/contact"
                            style={({ isActive }) => ({
                                color: 'red',
                                background: 'light-blue',
                                padding: '10px'
                            })} end>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}


export default Header;