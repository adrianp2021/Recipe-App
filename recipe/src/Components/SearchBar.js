// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

// import { ScaleLoader } from "react-spinners";

import { Input, Icon, Container, Card } from "semantic-ui-react";
import RecipePage from "./RecipePage";

const SearchBar = () => {
  // const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState([]);
  const [hasError, setHasError] = useState(false);

  const [loading, setLoading] = useState(true);

  const searchMeal = (event) => {
    if (event.key === "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((res) => res.json())
        .then((result) => {
          setMeal(result.meals);
          console.log(result.meals);
          setQuery("");
          setHasError(true);
        });
    }
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <section className="input">
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

        <section className="cocktail-index cocktail-page">
          <div className="container">
            <div id="recipe-section">
              {meal.map((recipe) => {
                return <RecipePage key={recipe.idDrink} {...recipe} />;
              })}
            </div>
          </div>
        </section>
      </>
    </section>
  );
};

export default SearchBar;
