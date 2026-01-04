import React from "react";
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Discover from './pages/Discover';
import Join from './pages/Join';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bgClass" style={{
      backgroundImage: 'url("src/images/background.jpg")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <div className="d-flex flex-column min-vh-100" >
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover/>}/>
            <Route path="/join" element={<Join/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

