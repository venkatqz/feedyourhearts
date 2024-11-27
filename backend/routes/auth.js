const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Donor Signup Route
router.post('/signup-donor', async (req, res) => {
  const { name, email, password, contact, type = 'donor' } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ name, email, password: hashedPassword, contact, type });
    await user.save();

    res.status(201).json({ message: 'Donor registered successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Orphanage Signup Route
router.post('/signup-orphanage', async (req, res) => {
  const { orphanageName, registrationNumber, authorizedPerson, email, contact, address, password, type = 'orphanage' } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new orphanage user
    const orphanage = new User({
      orphanageName,
      registrationNumber,
      authorizedPerson,
      email,
      contact,
      address,
      password: hashedPassword,
      type,
    });

    await orphanage.save();

    res.status(201).json({ message: 'Orphanage registered successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route (same for both donor and orphanage)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
