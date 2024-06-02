import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

function Home() {
    return (
        <>
            <NavBar />
            <div className="home-container">
                <div className="inner-home-container">
                    <div className="home-left">
                        <h1 className="web-title">Designed for You</h1>
                        <span className="blur-effect"></span>
                        <h2 className="web-title-explanation">Professional Website, Half the Cost.</h2>
                    </div>
                    <div className="home-right">
                        <img src="src\assets\homePageImg.png" alt="" id="home-page-img" />
                    </div>
                </div>
            </div>
            <main className="home-main">
                <h1 className="web-title-explanation"></h1>
                <div className="inner-home-main">
                    <div className="inner-home-main-left">
                        <img src="src\assets\Static website-pana.png" alt="" id="website-img" />
                    </div>
                    <div className="inner-home-main-right">
                        <h2>Custom website Design and Search Engine Optimization</h2>
                        <p>
                            Welcome to our web development service, where we specialize
                            in empowering small businesses with stunning, custom-built websites.
                            In today's digital age, having a strong online presence is crucial for
                            growth and success. However, many small businesses struggle to
                            establish a professional, effective website due to limited resources
                            and technical expertise. That's where we come in.
                            At our core, we believe in affordable pricing, high-quality work, 
                            and exceptional customer service. We take pride in our ability to 
                            deliver tailored solutions that not only meet but exceed your 
                            expectations. Whether you’re a startup looking to make your mark or 
                            an established business aiming to expand your online presence, our 
                            team is here to help you succeed. Contact us today for a free quote 
                            and take the first step toward transforming your business with a 
                            professional website.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;