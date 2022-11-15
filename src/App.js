import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/index';
import ServicesC from './components/ServicesC';
import MancaveC from './components/MancaveC';
import CareerC from './components/CareerC';
import ConnectC from './components/ConnectC';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' exact element={<Home />}  />
          <Route path='/Services' element={<ServicesC />} />
          <Route path='/Mancave' element={<MancaveC />} />
          <Route path='/Connect' element={<ConnectC />} />
          <Route path='/Career' element={<CareerC />} />
      </Routes>
      <Footer />
    </> 
  );
}

export default App;
