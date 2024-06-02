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
                        <p>We craft unique, user-friendly websites tailored to your business needs</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;