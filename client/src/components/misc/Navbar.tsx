import { FunctionComponent } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    // const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Brand */}
                <Link className="navbar-brand" to="/">Instant Ocean</Link>
                {/* Collapse Btn */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Nav Body */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="d-flex flex-row">
                            {/* Left */}
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/cruises">Cruises</NavLink>
                            <NavLink className="nav-link" to="/explore">Explore</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </div>

                        <div className="d-flex flex-row">
                            {/* Right */}
                            <NavLink className="nav-link" to="/search">Search</NavLink>
                            <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
                            <NavLink className="nav-link" to="/Login">Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;