import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <footer className="inner-footer">
                <ul className="nav nav-underline justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav--footer">
                        <Link to="/" className="nav-footer px-2"> Home </Link>
                    </li>
                    <li className="nav--footer">
                        <Link to="/About" className="nav-footer px-2"> About </Link>
                    </li>
                    <li className="nav--footer">
                        <Link to="/Pricing" className="nav-footer px-2"> Pricing </Link>
                    </li>
                    <li className="nav--footer">
                        <Link to="/Contact" className="nav-footer px-2"> Contact Us </Link>
                    </li>
                </ul>
                <p className="text-center">&copy; 2024 Company | pk Web Design</p>
            </footer>
        </div>
    );
}

export default Footer;