import React, { useState, useEffect } from 'react'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import { Toaster } from 'react-hot-toast';
import Resetpage from './pages/Resetpage';
import Accountpage from './pages/Accountpage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/register' element={<Registerpage />} />
        <Route path='/reset' element={<Resetpage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/account' element={<Accountpage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;