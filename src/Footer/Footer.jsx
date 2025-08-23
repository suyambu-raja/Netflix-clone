import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="socialmedia-container">
                <FaFacebookF className="social-icons" />
                <FaInstagram className="social-icons" />
                <BsTwitter className="social-icons" />
                <FaYoutube className="social-icons" />
            </div>
            <ul className="footer-components-names">
                <li>Audio Description</li>
                <li>Help Centre</li>
                <li>Gift Cards</li>
                <li>Media Centre</li>
                <li>investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>corporate Information</li>
                <li>contact Us</li>
            </ul>
        </div>
    )
}

export default Footer