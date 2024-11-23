import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Comps/Home';
import Login from './Comps/Login';
import Donation_Form from './Comps/Donation-Form';
import Signup1 from './Comps/SIGNUP1';

function Myrouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donation-form" element={<Donation_Form />} />
      <Route path="/signup" element={<Signup1 />} />
    </Routes>
  );
}

export default Myrouter;
