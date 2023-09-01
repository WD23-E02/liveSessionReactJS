import React, {useEffect, useState} from "react";

function Search({handleSearch}) {
  const [searchInput, setSearchInput] = useState("cast");
  //   console.log(searchInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    // the function we created in App.jsx to fetch data
    handleSearch(searchInput);
  };


  //Debouncing:is a technique used to control how often a function is called

  // Integrated the useRef hook to maintain this mini project as a future reference.
  useEffect(() => {
   
    
    const timer = setTimeout(() => {
      handleSearch(searchInput);
    }, 1000);

    //clean up function
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
