import React ,{ useState} from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import FetchSuggestions from '../mapservices/FetchSuggestions';
import FetchToken from "../mapservices/FetchToken";


const FindCarForm = ({ onSelect }) => {
  const [to, setTo] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" onChange={e => setTo(e.target.value)} placeholder="To" required />
          {/* Pass token as prop to FetchSuggestions */}
          <FetchSuggestions query={to} region="IND" token={FetchToken} />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" onChange={e => setDestination(e.target.value)} placeholder="Destination" required />
          {/* Pass token as prop to FetchSuggestions */}
          <FetchSuggestions query={destination} region="IND" token={FetchToken} />
        </FormGroup>

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