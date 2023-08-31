import React, {useEffect, useState} from "react";

function Search({handleSearch}) {
  const [searchInput, setSearchInput] = useState("cast");
  //   console.log(searchInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    // the function we created in App.jsx to fetch data
    handleSearch(searchInput);
  };

  //Debouncing:is a technique used to control how often a function is called,it's prevent unnecessary API requests for each character typed.

  useEffect(() => {
    // Create a timeout to execute handleSearch after 700ms of user inactivity
    const timer = setTimeout(() => {
      handleSearch(searchInput);
    }, 700);

    // cleanup to clean the settimeOut before start a new setTimeout
    return () => {
      clearTimeout(timer);
    };
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
