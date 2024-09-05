import React from "react";

const AppProject = ({ appClass, appLink, title, repoLink, appDescription }) => {
    
    // Render a card with a project screenshot, title, and links to deployed app and repo
    return (
        <div className={`portfolioItem shadow ${appClass}`}>
            <div className="portfolioContent">
                <div>
                    <span>
                        <a
                            href={appLink}
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                        >{title}</a>
                    </span>
                    <a href={repoLink} target="_blank">
                        <span class="icon">
                            <i class="fa-brands fa-github fa-lg" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
                <p>{appDescription}</p>
            </div>
        </div>
    );
};

export default AppProject;