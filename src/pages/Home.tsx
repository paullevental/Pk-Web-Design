import Footer from "../components/Footer";



function Home() {

    const scrollToMiddle = () => {
        const middleElement = document.getElementById('middle');
        if (middleElement) {
          middleElement.scrollIntoView();
        }
      };

    return (
      <>
        <div className="home-container">
          <div className="inner-home-container">
            <div className="home-left">
              <h1 className="web-title">Your Business, Online.</h1>
              <button type="button" onClick={scrollToMiddle} className="plan-btn2" >
                Learn More
              </button>
            </div>
            <div className="home-right"></div>
          </div>
        </div >
        <main className="home-main">
          <div className="inner-home-main">
            <div className="inner-home-main-left">
              <div className="nested-inner-home-main-left">
                <h2>Transform Your Online Presence</h2>
              </div>
            </div>
            <div className="inner-home-main-right">
              <img src="src\assets\Placeholder1.png" alt="" id="website-img" />
            </div>
          </div>
        </main>
        <main className="home-main2">
          <div className="inner-home-main2">
            <div className="inner-home-main-right2">
              <img
                src="src\assets\SEO.png"
                alt=""
                id="website-img2"
              />
            </div>
            <div className="inner-home-main-left2">
              <div className="nested-inner-home-main-left2">
                <h2>Expert SEO & Web Design</h2>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </>
    );
}

export default Home;