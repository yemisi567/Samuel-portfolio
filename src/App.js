import React from 'react';
import './App.css';
import Home from './components/home'
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import DownLoadCv from "./components/download-cv";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Adashi from './components/home/adashi/Adashi';
import PayMyBills from './components/home/pay-my-bills';
import AtmSolution from './components/home/atm-solution';
import GraphicsDesign from './components/projects/graphics-design';
import ProductDesign from './components/projects/product-design';
import OtherProjects from './components/projects/other-projects';

const App = () => {
   

  return (
    <div className="App" >
      <Router>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/download-cv" element={<DownLoadCv />} />
          <Route exact path="/adashi" element={<Adashi />} />
          <Route exact path="/pay-my-bills" element={<PayMyBills />} />
          <Route exact path="/atm-solution" element={<AtmSolution />} />
          <Route exact path="/graphics-design" element={<GraphicsDesign />} />
          <Route exact path="/product-design" element={<ProductDesign />} />
          <Route exact path="/other-projects" element={<OtherProjects />} />
          <Route path="*">
        </Route>
        </Routes>
    </Router>
  </div>
  );
}

export default App;
