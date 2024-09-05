import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeLink, setActiveLink] = useState('about');
    

    // Toggle the hamburger menu visibility
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    // Set link status to active
    const handleClickLink = (linkName) => {
        setActiveLink(linkName)
    }

    // Render Navigation
    return (
        <nav>
            <section className="navContent navbar">
                <div className="navbar-brand" style={{ marginRight: "36px"}}>
                    <div>
                        <h1 
                            className="title mainTitle" 
                        >JASON RYAN</h1>
                    </div>

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
                            onClick={() => handleClickLink('about')}
                            style={{ 
                                textDecoration: 'none', 
                                color: activeLink === 'about' ? '#007bff' : 'white',
                                backgroundColor: activeLink === 'about' ? 'white' : ''
                            }}
                        >
                            <div className="navbar-item-format">
                                <span className="icon is-small"
                                ><i className="fa-regular fa-user" aria-hidden="true"></i
                                ></span>
                                <span style={{marginLeft: "7px"}}>About Me</span>
                            </div>
                        </Link>

                        <Link
                            to="/Portfolio"
                            className="navbar-item"
                            onClick={() => handleClickLink('portfolio')}
                            style={{ 
                                textDecoration: 'none', 
                                color: activeLink === 'portfolio' ? '#007bff' : 'white',
                                backgroundColor: activeLink === 'portfolio' ? 'white' : ''
                            }}
                        >
                            <div className="navbar-item-format">
                                <span className="icon is-small"
                                ><i className="fa-regular fa-lightbulb" aria-hidden="true"></i
                                ></span>
                                <span style={{marginLeft: "7px"}}>Portfolio</span>
                            </div>
                        </Link>

                        <Link
                            to="/Contact"
                            className="navbar-item"
                            onClick={() => handleClickLink('contact')}
                            style={{ 
                                textDecoration: 'none', 
                                color: activeLink === 'contact' ? '#007bff' : 'white',
                                backgroundColor: activeLink === 'contact' ? 'white' : ''
                            }}
                        >
                            <div className="navbar-item-format">
                                <span className="icon is-small"
                                ><i className="fa-regular fa-envelope"></i
                                ></span>
                                <span style={{marginLeft: "7px"}}>Contact Me</span>
                            </div>
                        </Link>

                        <Link
                            to="/Resume"
                            className="navbar-item"
                            onClick={() => handleClickLink('resume')}
                            style={{ 
                                textDecoration: 'none', 
                                color: activeLink === 'resume' ? '#007bff' : 'white',
                                backgroundColor: activeLink === 'resume' ? 'white' : ''
                            }}
                        >
                            <div className="navbar-item-format">
                                <span className="icon is-small"
                                ><i className="far fa-file-alt" aria-hidden="true"></i
                                ></span>
                                <span style={{marginLeft: "7px"}}>Resume</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}
