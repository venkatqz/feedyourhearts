import React from 'react'
import { Route } from 'react-router-dom'

function Myrouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donation-form" element={<Donation_Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup1 />} />

    </Routes>
  )
}

export default Myrouter