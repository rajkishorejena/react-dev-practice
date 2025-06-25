import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cachedResults, setCachedResults] = useState({});

  // Function to fetch search results from the API
  const fetchSearchResults = async () => {
    console.log("Fetching search results for:", input);
    if (!input) {
      setSearchResults([]);
      return;
    }
    // Check if the results are already cached
    if (cachedResults[input]) {
      console.log("Using cached results for:", input);
      setSearchResults(cachedResults[input]);
      return;
    }
    // This function will be used to fetch search results
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${input}`
    );
    const data = await response.json();
    console.log(data);
    if (data && data.recipes) {
      setSearchResults(data.recipes);
      // Cache the results
      setCachedResults((prv) => ({ ...prv, [input]: data.recipes }));
    } else {
      setSearchResults([]);
    }
  };
  useEffect(() => {
    // Debounce the search input
    const timer = setTimeout(fetchSearchResults, 500);
    return () => clearTimeout(timer);
  }, [input]);
  return (
    <div>
      <h3>Search Bar</h3>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search content..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
      </div>
      {showResults && (
        <div className="search-results-container">
          {searchResults.map((result, index) => {
            return (
              <div key={index} className="search-result-item">
                <img
                  src={result.image}
                  alt={result.name}
                  className="search-result-image"
                />
                <span key={index} className="search-result">
                  {result.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
