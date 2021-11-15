// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PuffLoader from 'react-spinners/PuffLoader'

// import { ScaleLoader } from "react-spinners";

import { Input, Icon, Container, Card } from "semantic-ui-react";
import RecipePage from "./RecipePage";

const SearchBar = () => {
  // const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState([]);
  const [hasError, setHasError] = useState(false);

  const [loading, setLoading] = useState(true)

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
    setLoading(true)
  }, [])

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

        {/* <Link to="recipe-page">
          <div className="meal-search-container">
            {meal.map((recipe) => {
              return (
                <Link to="search-meal">
                  <Container>
                    {meal.length > 0 ? (
                      <RecipePage key={recipe.idMeal}  {...recipe}/>
                        <p>{recipe.strCategory}</p>
                        <p>{recipe.strMeal}</p>
                        <img src={recipe.strMealThumb} alt="" />
                      </div>
                    ) : (
                      <h2>
                        {hasError ? "Something has gone wrong" : "loading"}
                      </h2>
                    
                  </Container>
                </Link>
              );
            })}
          </div>
        </Link> */}

    <section className="cocktail-index cocktail-page">
      <div className="container">
        {/* {meal.length > 0 ? ( */}
          <div id="recipe-section">
            {meal.map((recipe) => {
              return <RecipePage key={recipe.idDrink} {...recipe} />
            })}
          </div>
        {/* ) : ( */}
          {/* <div id="error">
            {hasError ? (
              'Something has gone wrong.'
            ) : (
              <PuffLoader size={150} />
            )}
          </div> */}
        {/* )} */}
      </div>
    </section>
      </>
    </section>
  );
};

export default SearchBar;
