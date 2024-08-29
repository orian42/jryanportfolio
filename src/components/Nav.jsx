import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const currentPage = useLocation().pathname;

    const inactiveLinkStyle = {
        border: "1px black",
        padding: "5px",
        display: "flex",
    };
    const activeLinkStyle = {
        border: "1px black",
        background: "white",
        padding: "5px",
        display: "flex",
    };

    return (
        <nav>
            <section
                style={{
                    height: "100%",
                    display: "flex",
                    fontFamily: "helvetica",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}
            >
                <h1>Jason M. Ryan</h1>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={
                                currentPage === "/" ? "activeLinkStyle" : "inactiveLinkStyle"
                            }
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/About"
                            className={
                                currentPage === "/About"
                                    ? "activeLinkStyle"
                                    : "inactiveLinkStyle"
                            }
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Portfolio"
                            className={
                                currentPage === "/Portfolio"
                                    ? "activeLinkStyle"
                                    : "inactiveLinkStyle"
                            }
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Contact"
                            className={
                                currentPage === "/Contact"
                                    ? "activeLinkStyle"
                                    : "inactiveLinkStyle"
                            }
                        >
                            Contact Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Resume"
                            className={
                                currentPage === "/Resume"
                                    ? "activeLinkStyle"
                                    : "inactiveLinkStyle"
                            }
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
}
