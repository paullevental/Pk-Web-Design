import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

function Home() {
    return (
        <>
            <NavBar />
            <div className="home-container">
                <div className="inner-home-container">
                    <h1 className="web-title">Designed for You</h1>
                    <span className="blur-effect"></span>
                    <h2 className="web-title-explanation">Professional Website, Half the Cost.</h2>
                </div>
            </div>
            <main className="home-main">
                <h1>Hello</h1>
            </main>
            <Footer />
        </>
    );
}

export default Home;