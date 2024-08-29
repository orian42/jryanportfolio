import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const currentPage = useLocation().pathname;

    const inactiveLinkStyle = {
        border: "1px black",
        padding: "5px",
        display: "flex",
        color: "inherit"
    };
    const activeLinkStyle = {
        border: "2px black solid",
        background: "white",
        padding: "5px",
        display: "flex",
        textDecoration: "none",
        color: "inherit"
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
                    <p>
                        <Link
                            to="/"
                            className={
                                currentPage === "/"
                                    ? "activeLinkStyle"
                                    : "inactiveLinkStyle"
                            }
                        >
                            About Me
                        </Link>
                    </p>
                    <p>
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
                    </p>
                    <p>
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
                    </p>
                    <p>
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
                    </p>
            </section>
        </nav>
    );
}
