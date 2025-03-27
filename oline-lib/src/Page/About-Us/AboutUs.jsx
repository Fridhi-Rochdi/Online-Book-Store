import "./AboutUs.css";

export default function AboutUs() {
    return (
        <div className="about">
            <h1 className="about-us">About Us</h1>
            <p className="store-description">
                We are an online bookstore dedicated to providing a wide range of books for all readers. Whether you're into fiction, non-fiction, or academic literature, we have something for everyone.
            </p>
            <div className="about-details">
                <h2 className="about-heading">Our Mission</h2>
                <p>
                    Our mission is to offer a seamless shopping experience by providing easy access to a diverse selection of books, delivering quality customer service, and creating a community of book lovers.
                </p>

                <h2 className="about-heading">Why Choose Us?</h2>
                <ul className="about-reasons">
                    <li>Fast and secure delivery.</li>
                    <li>A wide variety of genres and authors.</li>
                    <li>Easy returns and exchanges.</li>
                    <li>Support for local authors and publishers.</li>
                </ul>

                <h2 className="about-heading">Version Information</h2>
                <p className="version">
                    <strong>Version: 1.0.0</strong>
                </p>
            </div>
        </div>
    );
}