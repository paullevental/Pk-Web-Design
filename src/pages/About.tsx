// import Footer from "../components/Footer";

function About() {

    const scrollToMiddle = () => {
        const middleElement = document.getElementById('grandeClinicImg_1');
        if (middleElement) {
            middleElement.scrollIntoView();
        }
    };

    return (
        <>
            <div className="about-container">
                <div className="about-container-wrapper">
                    <h1>Our Service</h1>
                    <div className="about-button-wrapper">
                        <button type="button" onClick={scrollToMiddle} className="plan-btn2" >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <main className="about-main">
                <div className="about-main-inner">
                    <a href="https://grandemed.ca/">
                        <img src="src\assets\SquareClinic.png" id="grandeClinicImg_1" />
                    </a>
                    <h1 className="description">Grande Med Clinic</h1>
                </div>
            </main>
            {/* <div className="about-team-container">
                <div className="about-team">
                    <div className="developer-card">
                        <div className="developer-card-img-div">
                            <img src="https://i.pinimg.com/736x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg" alt="" />
                        </div>
                        <h2>Developer 1</h2>
                        <p>
                            Donec sagittis elit sapien, et efficitur arcu malesuada vitae.
                            Donec cursus accumsan nunc nec fringilla. Aenean id nunc vel magna pellentesque tristique.
                            Vivamus gravida ex non neque pharetra luctus. Suspendisse potenti. Aenean lobortis lobortis
                            nisl suscipit accumsan
                        </p>
                    </div>
                    <div className="developer-card">
                        <div className="developer-card-img-div">
                            <img src="https://i.pinimg.com/736x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg" alt="" />
                        </div>
                        <h2>Developer 1</h2>
                        <p>
                            Donec sagittis elit sapien, et efficitur arcu malesuada vitae.
                            Donec cursus accumsan nunc nec fringilla. Aenean id nunc vel magna pellentesque tristique.
                            Vivamus gravida ex non neque pharetra luctus. Suspendisse potenti. Aenean lobortis lobortis
                            nisl suscipit accumsan
                        </p>

                    </div>
                </div> 
            </div> */}
        </>
    );
}

export default About



