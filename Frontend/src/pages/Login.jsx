import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

function Login() {
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // For success messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'A valid email is required.';
    if (!formData.password || formData.password.length < 6) errors.password = 'Password must be at least 6 characters.';
    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', formData);
        setSuccessMessage(response.data.message); // Set success message
        setErrorMessages({});
        // You can store user data in localStorage or redirect the user here
      } catch (error) {
        setErrorMessages({ server: error.response?.data?.error || 'Invalid login credentials!' });
      }
    }
  };

  return (
    <Container className="mt-4">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="loginEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
          />
          {errorMessages.email && <p className="text-danger">{errorMessages.email}</p>}
        </Form.Group>

        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password || ''}
            onChange={handleInputChange}
          />
          {errorMessages.password && <p className="text-danger">{errorMessages.password}</p>}
        </Form.Group>

        {errorMessages.server && <p className="text-danger">{errorMessages.server}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}

        <Button className="mt-3" variant="primary" type="submit">
          Login
        </Button>

        <div className="mt-3">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
