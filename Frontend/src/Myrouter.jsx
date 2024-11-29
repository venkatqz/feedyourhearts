import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Comps/Home';
import Login from './pages/Login';
import Donation_Form from './Comps/Donation-Form';
import SignUp from './pages/SignUp';
import ItemCards from './pages/OrphanageList';
import DummyDataDisplay from './pages/DummyReq';


function Myrouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donation-form" element={<Donation_Form />} />
      <Route path="/request-list" element={<DummyDataDisplay></DummyDataDisplay>}></Route>
      
    </Routes>
  );
}

export default Myrouter;
