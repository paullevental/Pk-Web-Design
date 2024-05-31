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
                <h1 className="web-title-explanation">How it works</h1>
            </main>
            <Footer />
        </>
    );
}

export default Home;