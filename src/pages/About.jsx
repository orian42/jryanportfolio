export default function About() {


    return (
        <div>
            <h1 class="title is-2">ABOUT ME</h1>
            <div style={{display: 'flex'}}>
                <img 
                    src="./src/assets/jason.JPEG"
                    style={{margin: '5px', 
                        padding: '5px',
                        height: '359px',
                    }}
                />
                <div style={{
                        margin: '5px', 
                        padding: '5px'}}>
                <p
                    style={{
                        margin: '5px', 
                        padding: '5px',
                        fontSize: '24px',
                        textAlign: 'justify'
                    }}
                >
                    I am a recently retired employee of the California Department of Corrections and Rehabilitation (CDCR) having served for 25 1/2 years. I am seeking to begin the next adventure - this time working as a full-stack web developer. I have always been interested in this field and have even taken several courses to better understand it. I was able to use this knowledge during my time employed with CDCR to streamline repetitive tasks making several processes easier not only on myself but for those with whom I worked around and for. I am excited to be concluding a coding bootcamp next month! I am ready to prove to myself that I am able to succeed in a new career as a developer!
                </p>
                </div>
            </div>
        </div>
    )
}