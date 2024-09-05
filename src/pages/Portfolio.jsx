import React from "react";
import AppProject from "../components/Project";

export default function Portfolio() {

    // Render portfolio content
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title is-2">Portfolio</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap"
                }}
            >
                {/* Render portfolio projects utilizing the Project component */}
                <AppProject
                    appClass="app1"
                    appLink="https://deadxfaces.up.railway.app/"
                    title="Dead X Faces"
                    repoLink="https://github.com/orian42/DeadXFaces"
                    appDescription="Full-Stack MVC Application"
                />

                <AppProject
                    appClass="app2"
                    appLink="https://techblog-production-acca.up.railway.app/"
                    title="The Tech Blog"
                    repoLink="https://github.com/orian42/techBlog"
                    appDescription="Full-Stack MVC Application"
                />

                <AppProject
                    appClass="app3"
                    appLink="https://arrozconpollo220.github.io/SLC-Events/index.html"
                    title="SLC Events"
                    repoLink="https://github.com/orian42/SLC-Events"
                    appDescription="Third-Party API"
                />

                <AppProject
                    appClass="app4"
                    appLink="https://orian42.github.io/weather/"
                    title={<>Weather<br />Dashboard</>}
                    repoLink="https://github.com/orian42/weather"
                    appDescription="Third-Party API"
                />

                <AppProject
                    appClass="app5"
                    appLink="https://orian42.github.io/personal_blog/index.html"
                    title="Personal Blog"
                    repoLink="https://github.com/orian42/personal_blog"
                    appDescription="JavaScript"
                />

                <AppProject
                    appClass="app6"
                    appLink="https://orian42.github.io/payroll/"
                    title="Payroll Tracker"
                    repoLink="https://github.com/orian42/payroll"
                    appDescription="JavaScript"
                />

            </div>
        </div>
    )
}