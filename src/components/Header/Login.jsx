import React, { useState } from 'react';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State variable for controlling popup visibility

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your logic to authenticate the user
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    // For now, let's just clear the fields
    setPhoneNumber('');
    setPassword('');
    // Show the popup message
    setShowPopup(true);
  };

  return (
    <div className="App">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        <button type="submit">Login</button>
      </form>
      {/* Popup message */}
      {showPopup && (
        <div className="popup">
          <p>Successfully logged in!</p>
          {/* Close button */}
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
      <style>{`
        .App {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        
        .login-form {
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          width: 300px;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        label {
          display: block;
          margin-bottom: 5px;
        }
        
        input[type='tel'],
        input[type='password'] {
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
        
        /* Popup styles */
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 20px;
          border-radius: 8px;
          z-index: 9999;
        }
        
        .popup p {
          margin: 0;
          font-size: 18px;
        }
        
        .popup button {
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Login;
