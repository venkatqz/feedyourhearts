import React from 'react'
import './Form.css'
function Donation_Form() {
  return (
    <div class="container">
    <h2>Food Donation Form</h2>
    <form action="/donate" method="POST">
      <label for="donor-name">Name:</label>
      <input type="text" id="donor-name" name="donor-name" required></input>

      <label for="food-type">Food Type:</label>
      <input type="text" id="food-type" name="food-type" required></input>

      <label for="quantity">Quantity (in kg):</label>
      <input type="number" id="quantity" name="quantity" required></input>

      <label for="pickup-address">Pickup Address:</label>
      <textarea id="pickup-address" name="pickup-address" required></textarea>

      <button type="submit">Donate Food</button>
    </form>
  </div>
  )
}

export default Donation_Form