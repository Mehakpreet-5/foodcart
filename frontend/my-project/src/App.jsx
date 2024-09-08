import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/Signup';
import Navbar from './components/navbar';
import Index from './components';
import Footer from './components/footer';
import About from './components/nav/about';
import Menu from './components/nav/menu.jsx';
import Cart from './components/cart.jsx';
function App() {
  <>
  </>
  

return (
  <Router>
  <Navbar/>
    <div>
      <Routes>
        <Route path='/' element={<Index/>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/" element={      <ChatBox /> } /> */}
        
      </Routes>
    </div>

  </Router>
); }
export default App
