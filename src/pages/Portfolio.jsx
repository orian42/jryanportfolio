export default function Portfolio() {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title is-2">PORTFOLIO</h1>
            <div>
                <div
                    className="shadow"
                    style={{
                        backgroundImage: `url('./src/assets/slcEventsScreenshot.png')`,
                        width: '30%',
                        paddingTop: '30%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white'
                        }}
                    >
                        <a href="https://arrozconpollo220.github.io/SLC-Events/index.html">SLC Events</a>
                        <a href='https://github.com/orian42/SLC-Events' target="_blank">
                            <span class="icon">
                                <i class="fa-brands fa-github fa-3x" aria-hidden="true"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}