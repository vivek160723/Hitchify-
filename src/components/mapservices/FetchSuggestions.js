//FetchSuggestions.js
import React, { useEffect, useState } from 'react';
import FetchToken from './FetchToken';

const FetchSuggestions = ({ query, region }) => {
  const [suggestions, setSuggestions] = useState(null);

  useEffect(() => {
    if (query !== "" && query.length > 2) {
      fetch('http://localhost:3004/generate-token')
        .then(response => response.json())
        .then(data => {
          fetch('http://localhost:3004/getToken')
            .then(response => response.json())
            .then(data => {
              fetch(`http://localhost:3004/autosuggest?query=${query}&region=${region}&token=${data.token.access_token}`, {
                headers: {
                  Authorization: `Bearer ${data.token.access_token}`,
                },
              })
              .then(response => response.json())
              .then(data => {
                // Limiting suggestions to a maximum of 5
                const limitedSuggestions = data.slice(0, 5);
                setSuggestions(limitedSuggestions);
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
  }, [query, region]); // Add query and region to the dependency array

  return (
    <select className='suggestion-dropdown'>
      {suggestions ? (
        suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion.placeName}>
            {suggestion.placeName}
          </option>
        ))
      ) : (
        <option value="">--</option>
      )}
    </select>
  );
};

export default FetchSuggestions;
