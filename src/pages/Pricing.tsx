import Footer from "../components/Footer";

function Pricing() {
    return (
        <>
            <div className="pricing-container">
                <div className="pricing-container-wrapper">
                    <div className="pricing-wrapper-inner">
                        <div className="price-card">
                            <h2>$ 500</h2>
                            <p>Functional 6 page informative website with SEO</p>
                            <ul className="basic-plan">
                                <li>Responsive, Animated</li>
                                <li>Up to 6 pages</li>
                                <li>Hosting Setup</li>
                                <li>Search Engine optimizaton</li>
                                <li>Speed optimization</li>
                                <li>Content Upload</li>
                                <li>Contact Form Integration</li>
                                <li>Optimized Security</li>
                                <li>Social media links</li>
                            </ul>
                            <button className="plan-btn">Contact For Info</button>
                        </div>
                        <div className="price-card">
                            <h2>$ 750</h2>
                            <p>Custom designed website, up to 9 pages, fit to your desires </p>
                            <ul className="standard-plan">
                                <li>Responsive, Animated</li>
                                <li>Up to 9 pages</li>
                                <li>Hosting Setup</li>
                                <li>Search Engine optimizaton</li>
                                <li>Speed optimization</li>
                                <li>Free lifetime support</li>
                                <li>Content Upload</li>
                                <li>Payment Processing</li>
                                <li>Contact Form Integration</li>
                                <li>Optimized Security</li>
                                <li>Social media links</li>
                            </ul>
                            <button className="plan-btn">Contact For Info</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Pricing

