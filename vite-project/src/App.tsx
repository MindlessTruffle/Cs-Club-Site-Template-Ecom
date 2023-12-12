import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './elements/navigation';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import FooterElement from './elements/footer';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <FooterElement />
      </div>
    </Router>
  );
}

export default App;
