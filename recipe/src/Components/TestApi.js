import React, { useState, useEffect } from "react";
import { Input, Icon, Container, Card } from "semantic-ui-react";

const TestApi = () => {
  const app_id = "66d7fdd1";
  const application_key = "4b79c8ac7b34abce6a3d7a4da65bf971";
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const searchMeal = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.edamam.com/search?app_id=${app_id}&app_key=${application_key}&q=${query}`
      )
        .then((res) => res.json())
        // console.log('what is res in test apiu ->', res)
        .then((result) => {
          setMeal(result.hits);
          console.log("what is result in testapi ->", result.hits);
          setQuery("");
          setHasError(true);
        });
    }
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div>
      <section className="input">
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
      </section>

      {meal.length != 0 && (
        <section>
          <div>
            <div id="test-section">
              {meal.map((recipe, i) => {
                return (
                  <div key={i} >
                    <h3 className="best-color">{recipe.recipe.label}</h3>
                    <h3 className="best-color">{recipe.recipe.dishType}</h3>
                    <img src={recipe.recipe.image} className="best-color" alt="" />
                    <h3 >{recipe.recipe.cuisineType}</h3>
                    <h3 >{recipe.recipe.calories}</h3>
                    <h3 >{recipe.recipe.ingredientLines}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TestApi;
