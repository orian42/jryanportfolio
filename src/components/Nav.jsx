import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const currentPage = useLocation().pathname;

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
                <h1 class="title is-1">Jason M. Ryan</h1>
                <div class="tabs is-boxed">
                    <ul>
                        <li
                            className={
                                currentPage === "/"
                                    ? "is-active"
                                    : "is-inactive"
                            }
                        >
                            <Link
                                to="/"
                            >
                                <span class="icon is-small"
                                ><i class="fa-regular fa-user" aria-hidden="true"></i
                                ></span>
                                <span>About Me</span>
                            </Link>
                        </li>
                        <li
                            className={
                                currentPage === "/Portfolio"
                                    ? "is-active"
                                    : "is-inactive"
                            }
                        >
                            <Link
                                to="/Portfolio"
                            >
                                <span class="icon is-small"
                                ><i class="fa-regular fa-lightbulb" aria-hidden="true"></i
                                ></span>
                                <span>Portfolio</span>
                            </Link>
                        </li>
                        <li
                            className={
                                currentPage === "/Contact"
                                    ? "is-active"
                                    : "is-inactive"
                            }
                        >
                            <Link
                                to="/Contact"
                            >
                                <span class="icon is-small"
                                ><i class="fa-regular fa-envelope"></i
                                ></span>
                                <span>Contact Me</span>
                            </Link>
                        </li>
                        <li
                            className={
                                currentPage === "/Resume"
                                    ? "is-active"
                                    : "is-inactive"
                            }
                        >
                            <Link
                                to="/Resume"
                            >
                                <span class="icon is-small"
                                ><i class="far fa-file-alt" aria-hidden="true"></i
                                ></span>
                                <span>Resume</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </nav>
    )
}
