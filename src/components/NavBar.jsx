import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">
                                    <a className="nav-link active" aria-current="page" href="#">Schedule</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addschedule">
                                    <a className="nav-link" href="/">Add Schedule</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;