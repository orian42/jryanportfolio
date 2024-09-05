export default function Portfolio() {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title is-2">Portfolio</h1>
            <div
                style= {{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap"
                }}
            >

                <div 
                    className="portfolioItem shadow app1"
                >
                    <div className="portfolioContent">
                        <div>
                            <span>
                                <a
                                    href="https://deadxfaces.onrender.com/"
                                    target="_blank"
                                    style={{ textDecoration: 'none' }}
                                >Dead X Faces</a>
                            </span>
                            <a href='https://github.com/orian42/DeadXFaces' target="_blank">
                                <span class="icon">
                                    <i class="fa-brands fa-github fa-lg" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                        <p>Full-Stack MVC Application</p>
                    </div>
                </div>

                <div className="portfolioItem shadow app2">
                    <div className="portfolioContent">
                        <div>
                            <span>
                                <a
                                    href="https://techblog-production-acca.up.railway.app/"
                                    target="_blank"
                                    style={{ textDecoration: 'none' }}
                                >The Tech Blog</a>
                            </span>
                            <a href='https://github.com/orian42/techBlog' target="_blank">
                                <span class="icon">
                                    <i class="fa-brands fa-github fa-lg" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                        <p>Full-Stack MVC Application</p>
                    </div>
                </div>

                <div className="portfolioItem shadow app3">
                    <div className="portfolioContent">
                        <div>
                            <span>
                                <a
                                    href="https://arrozconpollo220.github.io/SLC-Events/index.html"
                                    target="_blank"
                                    style={{ textDecoration: 'none' }}
                                >SLC Events</a>
                            </span>
                            <a href='https://github.com/orian42/SLC-Events' target="_blank">
                                <span class="icon">
                                    <i class="fa-brands fa-github fa-lg" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                        <p>Third-Party API</p>
                    </div>
                </div>

                <div className="portfolioItem shadow app4">
                    <div className="portfolioContent">
                        <div>
                            <span>
                                <a
                                    href="https://orian42.github.io/weather/"
                                    target="_blank"
                                    style={{ textDecoration: 'none' }}
                                >Weather<br></br> Dashboard</a>
                            </span>
                            <a href='https://github.com/orian42/weather' target="_blank">
                                <span class="icon">
                                    <i class="fa-brands fa-github fa-lg" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                        <p>Third-Party API</p>
                    </div>
                </div>

                <div className="portfolioItem shadow app5">
                    <div className="portfolioContent">
                        <div>
                            <span>
                                <a
                                    href="https://orian42.github.io/personal_blog/index.html"
                                    target="_blank"
                                    style={{ textDecoration: 'none' }}
                                >Personal Blog</a>
                            </span>
                            <a href='https://github.com/orian42/personal_blog' target="_blank">
                                <span class="icon">
                                    <i class="fa-brands fa-github fa-lg" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                        <p>JavaScript</p>
                    </div>
                </div>

                <div className="portfolioItem shadow app6">
                    <div className="portfolioContent">
                        <div>
                            <span>
                                <a
                                    href="https://orian42.github.io/payroll/"
                                    target="_blank"
                                    style={{ textDecoration: 'none' }}
                                >Payroll Tracker</a>
                            </span>
                            <a href='https://github.com/orian42/payroll' target="_blank">
                                <span class="icon">
                                    <i class="fa-brands fa-github fa-lg" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                        <p>Javascript</p>
                    </div>
                </div>

            </div>
        </div>
    )
}