import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Comps/Home';
import Login from './pages/Login';
import Donation_Form from './Comps/Donation-Form';
import SignUp from './pages/SignUp';

function Myrouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donation-form" element={<Donation_Form />} />
      
    </Routes>
  );
}

export default Myrouter;
