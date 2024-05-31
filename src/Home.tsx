import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Home() {
    return (
        <>
            <NavBar />
            <div className="home-container">
                <h1 className="web-title">Pk Web Design</h1>
                <span className="blur-effect"></span>
            </div>

            <Footer />
        </>
    );
}

export default Home;