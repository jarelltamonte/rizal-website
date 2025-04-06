import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Education from './Education';
import Romance from './Romance';
import Footer from './Footer';

function App() {
  return (
    <>
      <BrowserRouter> {/* Now using BrowserRouter directly */}
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/romance" element={<Romance />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
    
    
}

export default App;
