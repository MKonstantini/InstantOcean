import { FunctionComponent } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    // const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ minHeight: "90px" }}>
            <div className="container-fluid">
                {/* Brand */}
                <Link className="navbar-brand" to="/">Instant Ocean</Link>
                {/* Collapse Btn */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Nav Body */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100 d-flex justify-content-between">
                        <div className="d-lg-flex flex-row">
                            {/* Left */}
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/cruises">Cruises</NavLink>

                            <span className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Explore
                                </span>
                                <ul className="dropdown-menu">
                                    <NavLink className="dropdown-item"
                                        to="destinations">
                                        <i className="fa-solid fa-map-location-dot me-2"></i>
                                        Destinations
                                    </NavLink>
                                    <NavLink className="dropdown-item" to="activities">
                                        <i className="fa-solid fa-table-tennis-paddle-ball me-2"></i>
                                        Onboard Activities
                                    </NavLink>
                                    <NavLink className="dropdown-item" to="dining">
                                        <i className="fa-solid fa-champagne-glasses me-2"></i>
                                        Dining Rooms
                                    </NavLink>
                                </ul>
                            </span>


                            <NavLink className="nav-link me-auto" to="/about">About</NavLink>
                        </div>
                        <div className="d-lg-flex flex-row">
                            {/* Right */}
                            <NavLink className="nav-link" to="/search">Search</NavLink>
                            <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
                            <NavLink className="nav-link" to="/login">
                                <i className="fa-regular fa-circle-user me-2"></i>
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;