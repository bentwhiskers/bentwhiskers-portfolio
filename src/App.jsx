import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Cards/Header';
import Footer from './components/Cards/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
        
    </>
  )
}

export default App
