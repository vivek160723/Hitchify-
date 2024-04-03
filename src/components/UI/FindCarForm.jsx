import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import FetchSuggestions from '../mapservices/FetchSuggestions';
// import FetchToken from "../mapservices/FetchToken";
import { useNavigate } from "react-router-dom"; 
import AvailableRidesPage from "../../pages/AvailableRidesPage";



const FindCarForm = () => {
  const [to, setTo] = useState('');
  const [destination, setDestination] = useState('');
  const [showToSuggestions, setShowToSuggestions] = useState(true);
  const [date, setDate] = useState(''); // Add state for date
  const [time, setTime] = useState(''); // Add state for time
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(true);
  const navigate = useNavigate();

  const handleSuggestionSelect = (selectedSuggestion, field) => {
    if (field === 'to') {
      setTo(selectedSuggestion.placeName);
      setShowToSuggestions(false); // Hide suggestions after selection
    } else if (field === 'destination') {
      setDestination(selectedSuggestion.placeName);
      setShowDestinationSuggestions(false); // Hide suggestions after selection
    }
  };

  const handleFindRide = () => {
    // Perform any necessary actions before showing AvailableRidesPage
    if (!to || !destination || !date || !time) {
      // If any of the fields are empty, return without navigating
      return;
    }
    navigate('/available-rides');
  };



  return (
    
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <div className="search-bar-container">
          <input 
            type="text" 
            className="search-bar" 
            value={to} 
            onChange={e => {
              setTo(e.target.value);
              setShowToSuggestions(true); // Show suggestions when input changes
            }} 
            placeholder="Search" 
            required 
          />
          {showToSuggestions && to && <FetchSuggestions query={to} region="IND" onSelect={(suggestion) => handleSuggestionSelect(suggestion, 'to')} />}
        </div>

        <div className="search-bar-container">
          <input 
            type="text" 
            className="search-bar" 
            value={destination} 
            onChange={e => {
              setDestination(e.target.value);
              setShowDestinationSuggestions(true); // Show suggestions when input changes
            }} 
            placeholder="Search" 
            required 
          />
          {showDestinationSuggestions && destination && <FetchSuggestions query={destination} region="IND" onSelect={(suggestion) => handleSuggestionSelect(suggestion, 'destination')} />}
        </div>
        {/* Remaining form elements... */}
        <FormGroup className="form__group">
          <input 
            type="date" 
            placeholder="Journey date" 
            value={date} 
            onChange={e => setDate(e.target.value)} 
            required 
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            value={time}
            onChange={e => setTime(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" onClick={handleFindRide}>Find Ride</button>
        </FormGroup>
      </div>
    </Form>
  );
};
export default FindCarForm;