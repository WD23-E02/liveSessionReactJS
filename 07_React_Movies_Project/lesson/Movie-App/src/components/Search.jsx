import React, {useEffect, useRef, useState} from "react";

function Search({handleSearch}) {
  const [searchInput, setSearchInput] = useState("cast");
  //   console.log(searchInput);

  const timer = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // the function we created in App.jsx to fetch data
    handleSearch(searchInput);
  };

  //on mount fetch and display movies data
  useEffect(() => {
    // cleanup to clean the settimeOut before start a new setTimeout
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  //Debouncing:is a technique used to control how often a function is called

  // Integrated the useRef hook to maintain this mini project as a future reference.
  useEffect(() => {
    console.log(timer.current);
    //if already a fetch is in progress ,cancel previous request
    if (timer.current) {
      clearTimeout(timer.current);
    }
    //make a new request after 1s
    timer.current = setTimeout(() => {
      handleSearch(searchInput);
    }, 1000);
  }, [searchInput]);

  return (
    <div>
      <h1>Search Movies</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
