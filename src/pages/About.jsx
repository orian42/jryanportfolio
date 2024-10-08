export default function About() {

    // Render "about me" pic and bio
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title is-2">About Me</h1>
            <div>
                <div id="aboutContent" style={{ display: 'flex', justifyContent: "space-around" }}>
                    <div id="aboutPic">
                        <img
                            className="shadow"
                            src="images/jason.JPEG"
                            alt="A picture of Jason!"
                            style={{
                                margin: '5px',
                                padding: '5px',
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    <div id="aboutText">
                        <p
                            style={{
                                margin: '5px',
                                padding: '5px',
                                fontSize: '18px',
                                textAlign: 'justify',
                                overflowY: "auto",
                            }}
                        >
                            I am a recently retired employee of the California Department of Corrections and Rehabilitation (CDCR) having served for 25 1/2 years. I am seeking to begin the next adventure - this time working as a full-stack web developer. I have always been interested in this field and have even taken several courses to better understand it. I was able to use this knowledge during my time employed with CDCR to streamline repetitive tasks making several processes easier not only on myself but for those with whom I worked around and for. Having completed a coding bootcamp in September 2024, I am ready to prove to myself that I am able to succeed in a new career as a developer!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}