import React, { useState } from 'react';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePhoneNumberChange = (e) => {
    // Check if the entered value is a number
    const regex = /^[0-9]*$/;
    if (regex.test(e.target.value) || e.target.value === '') {
      // Allow only numbers or empty string (for deleting)
      setPhoneNumber(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to register the user
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // For now, let's just clear the fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
    // Show pop-up message
    alert('Successfully registered! Now go back to the home page and login.');
  };

  return (
    <div className="register-page">
      <h2>Sign up!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit">Sign up!</button>
      </form>
      <style jsx>{`
        .register-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        form {
          width: 300px;
          margin-top: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Register;
