import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Home";
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';


function App() {
  // return <NavBar></NavBar>;
  return (
    <>
      <Router>
        <Routes>

        </Routes>
      </Router>
      <Home />
    </>
  )
}

export default App;
