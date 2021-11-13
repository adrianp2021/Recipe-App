import React, { useState } from "react";

import { ScaleLoader } from "react-spinners";

import { Input, Icon } from "semantic-ui-react";

const SearchBar = () => {
  // const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState([]);
  const [hasError, setHasError] = useState(false);

  const searchMeal = (event) => {
    if (event.key === "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((res) => res.json())
        .then((result) => {
          setMeal(result.meals);
          setQuery("");
          console.log("what is the result ->", result);
          setHasError(true);
        });
    }
  };

  return (
    <section className="input">
      {meal ? (
        <>
          <Input
            icon
            type="text"
            placeholder="Search recipes..."
            className="input-search-bar"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
            onKeyPress={searchMeal}
          >
            <input />
            <Icon name="search" className="search-icon" />
          </Input>
          <div className="data-result">
            {meal.map((recipe, i) => {
              return (
                <div key={i} className="data-item">
                  <p>{recipe.strMeal}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h2 className="title has-text-centered">
          {hasError ? "Oops, something went wrong!" : <ScaleLoader />}
        </h2>
      )}
    </section>
  );
};

export default SearchBar;
