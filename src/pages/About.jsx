export default function About() {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title is-2">ABOUT ME</h1>
            <div>
                <div id="aboutContent" style={{ display: 'flex', justifyContent: "space-around" }}>
                    <div id="aboutPic">
                        <img
                            src="./src/assets/jason.JPEG"
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
                            I am a recently retired employee of the California Department of Corrections and Rehabilitation (CDCR) having served for 25 1/2 years. I am seeking to begin the next adventure - this time working as a full-stack web developer. I have always been interested in this field and have even taken several courses to better understand it. I was able to use this knowledge during my time employed with CDCR to streamline repetitive tasks making several processes easier not only on myself but for those with whom I worked around and for. I am excited to be concluding a coding bootcamp next month! I am ready to prove to myself that I am able to succeed in a new career as a developer!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}