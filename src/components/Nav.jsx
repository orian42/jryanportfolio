import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
    const currentPage = useLocation().pathname;
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <nav>
            <section className="navContent navbar">
                <div className="navbar-brand" style={{marginRight: "36px"}}>
                    <h1 className="title is-1" style={{marginRight: "36px"}}>JASON M. RYAN</h1>

                    <a 
                        role="button" 
                        className={`navbar-burger ${isMenuActive ? "is-active" : ""}`} 
                        aria-label="menu" 
                        aria-expanded="false" 
                        data-target="portfolioNavbar"
                        onClick={toggleMenu} 
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div 
                    id="portfolioNavbar" 
                    className={`navbar-menu ${isMenuActive ? "is-active" : ""}`}
                >
                    <div className="navbar-start">

                        <Link
                            to="/"
                            className="navbar-item"
                            style={{ textDecoration: 'none' }}
                        >
                            <span className="icon is-small"
                            ><i className="fa-regular fa-user" aria-hidden="true"></i
                            ></span>
                            <span>About Me</span>
                        </Link>

                        <Link
                            to="/Portfolio"
                            className="navbar-item"
                            style={{ textDecoration: 'none' }}
                        >
                            <span className="icon is-small"
                            ><i className="fa-regular fa-lightbulb" aria-hidden="true"></i
                            ></span>
                            <span>Portfolio</span>
                        </Link>

                        <Link
                            to="/Contact"
                            className="navbar-item"
                            style={{ textDecoration: 'none' }}
                        >
                            <span className="icon is-small"
                            ><i className="fa-regular fa-envelope"></i
                            ></span>
                            <span>Contact Me</span>
                        </Link>

                        <Link
                            to="/Resume"
                            className="navbar-item"
                            style={{ textDecoration: 'none' }}
                        >
                            <span className="icon is-small"
                            ><i className="far fa-file-alt" aria-hidden="true"></i
                            ></span>
                            <span>Resume</span>
                        </Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}
