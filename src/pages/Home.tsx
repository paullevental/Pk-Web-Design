import Footer from "../components/Footer";



function Home() {
    return (
        <>
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
                        <div className="nested-inner-home-main-left">
                            <h2>Custom website design and Search Engine Optimization</h2>
                            <p>
                                Welcome to our website development service, where we specialize
                                in empowering small businesses with stunning, custom-built websites.
                            </p>
                            <h2>Grow your business through an online-presence</h2>
                            <p>
                                In today's digital age, having a strong online presence is crucial for
                                growth and success. However, many small businesses struggle to
                                establish a professional, effective website due to limited resources
                                and technical expertise.
                            </p>
                            <h2>We deliver a website to go above and beyond your expectations</h2>
                            <p>
                                We take pride in our ability to
                                deliver tailored solutions that not only meet but exceed your
                                expectations.
                            </p>
                        </div>
                    </div>
                    <div className="inner-home-main-right">
                        <img src="src\assets\Static website-pana.png" alt="" id="website-img" />
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Home;