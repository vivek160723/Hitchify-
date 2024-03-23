import React, { useEffect, useState } from 'react';

import FetchToken from './FetchToken';



const FetchSuggestions = ({ query, region }) => { // Add query and region as props
  const [suggestions, setSuggestions] = useState(null);
  console.log("hello");
  console.log(FetchToken);

  useEffect(() => {
    // console.log(query + " " + region+" "+FetchToken);
    // fetch(`http://localhost:3004/autosuggest?query=${query}&region=${region}&token=de5f6ad4-6416-4010-8ceb-aa91dc543e5b`, {
    if(query !== "" && query.length > 3) {
      // const latestToken = "";
      fetch('http://localhost:3004/generate-token')
      .then(response => response.json())
      .then(data => {
        fetch('http://localhost:3004/getToken')
        .then(response => response.json())
        .then(data => {
          // latestToken = data.access_token;
          console.log("latestToken", data.token.access_token);
          fetch(`http://localhost:3004/autosuggest?query=${query}&region=${region}&token=${data.token.access_token}`, {
            headers: {
              Authorization: `Bearer ${data.token.access_token}`,
            },
          })
          .then(response =>  response.json())
          .then(data => {
            setSuggestions(data); // Assuming data is an array of suggestions
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
}, [query, region, FetchToken]);// Add query and region to the dependency array

  return (
    <div>
      {suggestions ? (
        suggestions.map((suggestion, index) => (
          <div key={index}>
            <p>Type: {suggestion.type}</p>
            <p>Place Address: {suggestion.placeAddress}</p>
            <p>Place Name: {suggestion.placeName}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default FetchSuggestions;