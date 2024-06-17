import { Link } from "react-router-dom";

function Pricing() {
    return (
        <>
            <div className="pricing-container">
                <div className="pricing-container-wrapper">
                    <div className="pricing-wrapper-inner">
                        <div className="price-card">
                            <h2>Basic | $ 500</h2>
                            <p>Up to 6 custom pages</p>
                            <ul className="basic-plan">
                                <li className="available">Responsive, Animated</li>
                                <li className="available">Up to 6 pages</li>
                                <li className="available">Hosting Setup</li>
                                <li className="available">Speed optimization</li>
                                <li className="available">Content Upload</li>
                                <li className="available">Contact Form Integration</li>
                                <li className="available">Optimized Security</li>
                                <li className="available">Social media links</li>
                                <li className="unavailable">Payment Processing</li>
                                <li className="unavailable">Search Engine optimizaton</li>
                                <li className="unavailable">Free lifetime support</li>
                            </ul>
                            <Link to="/contact"><button className="plan-btn">Contact For Info</button></Link>
                        </div>
                        <div className="price-card">
                            <h2>Pro | $ 750</h2>
                            <p>Up to 9 pages with SEO</p>
                            <ul className="standard-plan">
                                <li className="available">Responsive, Animated</li>
                                <li className="available">Up to 9 pages</li>
                                <li className="available">Hosting Setup</li>
                                <li className="available">Speed optimization</li>
                                <li className="available">Content Upload</li>
                                <li className="available">Contact Form Integration</li>
                                <li className="available">Optimized Security</li>
                                <li className="available">Social media links</li>
                                <li className="available">Payment Processing</li>
                                <li className="available">Search Engine optimizaton</li>
                                <li className="available">Free lifetime support</li>
                            </ul>
                            <Link to="/contact"><button className="plan-btn">Contact For Info</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing

