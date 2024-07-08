function Home() {

  const scrollToMiddle = () => {
    const middleElement = document.getElementById('homeWebPageImg');
    if (middleElement) {
      middleElement.scrollIntoView();
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="inner-home-container">
          <div className="home-container-wrapper">
            <h1 className="web-title">Your Business, Online.</h1>
            <button type="button" onClick={scrollToMiddle} className="plan-btn2" >
              Learn More
            </button>
          </div>
        </div>
      </div >
      <main className="home-main" id="home-main-web-page-section">
        <div className="inner-home-main">
          <h2>Transform Your Online Presence</h2>
          <img src="src\assets\Placeholder1.png" alt="" id="homeWebPageImg" />
        </div>
      </main>
      <main className="home-main" id="home-main-computer-section">
        <div className="inner-home-main">
          <img src="src\assets\SEO.png" id="homeComputerImg" />
          <h2>Expert SEO & Web Design</h2>
        </div>
      </main>
    </>
  );
}

export default Home;