export default function Nav() {
  const inactiveLinkStyle = { 
    border: "1px black", 
    padding: "5px",
    display: "flex"
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
                justifyContent: "space-evenly"
            }}
        >
            <h1>Jason M. Ryan</h1>
            <div style={inactiveLinkStyle}>
                <a href="#">About Me</a>
            </div>
            <div style={inactiveLinkStyle}>
                <a href="#">Portfolio</a>
            </div>
            <div style={inactiveLinkStyle}>
                <a href="#">Contact</a>
            </div>
            <div style={inactiveLinkStyle}>
                <a href="#">Resume</a>
            </div>
        </section>
    </nav>
  );
}
