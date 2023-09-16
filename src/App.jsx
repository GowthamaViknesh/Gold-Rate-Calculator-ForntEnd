import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Livegoldrate from './components/Livegoldrate';
import GoldCalc from './components/GoldCalc';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forgetpass from './Pages/Forgetpass';
import Dashboard from './Pages/Dashboard';
import OtpPage from './Pages/OtpPage';
import UsecontextProvider from './context/context';
import Reset from './Pages/Reset';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://gold-backend.onrender.com';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='app-container'>
      {isLoading ? (
        <div className='spinner-container'>
          <div className='spinner-grow' role='status'></div>
        </div>
      ) : (
        <UsecontextProvider>
          <Navbar />
          <Toaster position='top-center' toastOptions={{ duration: 2000 }} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forget' element={<Forgetpass />} />
            <Route path='/reset' element={<Reset />} />
            <Route path='/otp' element={<OtpPage />} />
            <Route path='/livegoldrate' element={<Livegoldrate />} />
            <Route path='/goldcalc' element={<GoldCalc />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </UsecontextProvider>
      )}
    </div>
  );
}

export default App;
