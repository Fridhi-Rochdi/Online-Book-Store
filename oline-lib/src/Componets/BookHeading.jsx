export default function BookHeading({ title }) {
    return (
        <div style={divStyle}>
            <h1 style={h1Style}>{title}</h1>
        </div>
    );
}

const divStyle = {
    padding: "12px 12px",
    backgroundColor: "white",
    textDecoration: "underline",
    color:"blue"
};

const h1Style = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
    
};
