import React, { useState } from 'react';

const XDictionary = () => {
  // Initialize dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  // Initialize search term state
  const [searchTerm, setSearchTerm] = useState('');
  // Initialize definition state
  const [definition, setDefinition] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Normalize search term to lowercase
    const normalizedSearchTerm = searchTerm.toLowerCase();
    // Find the word in the dictionary
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === normalizedSearchTerm);
    // If the word is found, set the definition
    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      // If the word is not found, display "Word not found in the dictionary."
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>XDictionary</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <p>{definition}</p>
    </div>
  );
};

export default XDictionary;
