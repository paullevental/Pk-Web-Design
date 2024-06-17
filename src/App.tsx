import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cubes from "./components/cubes";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Cubes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
