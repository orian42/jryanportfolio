export default function Resume() {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title is-2">My Resume</h1>

            <div
                className="box has-background-success shadow"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <p className="is-size-5">Download my <a href='resume.pdf' download='resume.pdf'>
                    Resume</a></p>
            </div>

            <div className="columns">
                <div className="column">

                    <div className="columns">
                        <div className="column">
                            <h2 className="title is-4">Front-end Proficiencies</h2>
                            <ul className="box has-background-light shadow">
                                <li className="has-text-link is-size-5 py-2">HTML</li>
                                <li className="has-text-link is-size-5 py-2">CSS</li>
                                <li className="has-text-link is-size-5 py-2">JavaScript</li>
                                <li className="has-text-link is-size-5 py-2">jQuery</li>
                                <li className="has-text-link is-size-5 py-2">responsive design</li>
                                <li className="has-text-link is-size-5 py-2">React</li>
                                <li className="has-text-link is-size-5 py-2">Bootstrap</li>
                            </ul>
                        </div>
                        <div className="column">
                            <h2 className="title is-4">Back-end Proficiencies</h2>
                            <ul className="box has-background-light shadow">
                                <li className="has-text-link is-size-5 py-2">API's</li>
                                <li className="has-text-link is-size-5 py-2">Node</li>
                                <li className="has-text-link is-size-5 py-2">Express</li>
                                <li className="has-text-link is-size-5 py-2">MySQL/Sequelize</li>
                                <li className="has-text-link is-size-5 py-2">MondoDB/Mongoose</li>
                                <li className="has-text-link is-size-5 py-2">REST</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}