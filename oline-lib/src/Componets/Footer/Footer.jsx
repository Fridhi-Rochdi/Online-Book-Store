import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-social-media">
                <div className="footer-social-media-title">Follow us on social media</div>
                <div className="footer-social-media-icones">
                    <div className="footer-social-media-icones-item">
                        <i style={{ color: "#E4405F" }} className="bi bi-instagram"></i>
                    </div>
                    <div className="footer-social-media-icones-item">
                        <i style={{ color: "#1877F2" }} className="bi bi-facebook"></i>
                    </div>
                    <div className="footer-social-media-icones-item">
                        <i style={{ color: "#FF0000" }} className="bi bi-youtube"></i>
                    </div>
                    <div className="footer-social-media-icones-item">
                        <i style={{ color: "#000000" }} className="bi bi-twitter-x"></i>
                    </div>
                    <div className="footer-social-media-icones-item">
                        <i style={{ color: "#0088CC" }} className="bi bi-telegram"></i>
                    </div>
                </div>
            </div>
            <div className="footer-info-wrraper">
                <div className="footer-info-wrrapper-links">
                    <div className="footer-info-wrraper-links-title">
                        Usefull Links
                    </div>
                    <ul className="footer-info-wrraper-links-lists">
                        <Link to="/" className="footer-info-wrraper-link">Home</Link>
                        <Link to="/authors" className="footer-info-wrraper-link">Authors</Link>
                        <Link to="about"className="footer-info-wrraper-link">About Us</Link>
                        <Link to="contact-us"className="footer-info-wrraper-link">Contact Us</Link>
                        <Link to="registre" className="footer-info-wrraper-link">Registre</Link>
                    </ul>
                </div>
                <div className="footer-info-wrrapper-links">
                    <div className="footer-info-wrraper-links-title">
                        Contact Information
                    </div>
                    <div className="footer-info-wrraper-adresse">
                        <div className="adress-info">
                        <i class="bi bi-geo-alt-fill"></i>
                        <p>25 Avenue des Champs-Élysées</p>
                        </div>
                        <div className="adress-info">
                        <i class="bi bi-telephone-fill"></i>
                        <p>+216 99999999</p>
                        </div>
                        <div className="adress-info">
                        <i class="bi bi-envelope"></i>
                        <p>jean.dupont@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-info-wrrapper-links">
                    <div className="footer-info-wrraper-links-title">
                       About Us
                    </div>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam ut iusto deserunt quaerat veritatis dicta quos, odio dolorum, error et aliquid dolor, accusantium accusamus veniam amet repudiandae delectus incidunt?
                    Lorem ipsum dolor sit,
                   </p>
                </div>
            </div>
        </div>
    );
}
