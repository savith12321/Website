import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Copyright from './components/Copyright/Copyright';
import About from './pages/About/About';
import Index from './pages/Index/Index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
