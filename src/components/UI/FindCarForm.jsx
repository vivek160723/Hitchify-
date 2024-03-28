import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import FetchSuggestions from '../mapservices/FetchSuggestions';
import FetchToken from "../mapservices/FetchToken";


const FindCarForm = () => {
  const [to, setTo] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <div className="search-bar-container">
          <input 
            type="text" 
            className="search-bar" 
            onChange={e => setTo(e.target.value)} 
            placeholder="Search" 
            required 
          />
          {/* Pass token as prop to FetchSuggestions */}
          <div className="suggestions-container">
            <FetchSuggestions query={to} region="IND" token={FetchToken} />
          </div>
        </div>

        <div className="search-bar-container">
          <input 
            type="text" 
            className="search-bar" 
            onChange={e => setDestination(e.target.value)} 
            placeholder="Search" 
            required 
          />
          {/* Pass token as prop to FetchSuggestions */}
          <div className="suggestions-container">
            <FetchSuggestions query={destination} region="IND" token={FetchToken} />
          </div>
        </div>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Ride</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
