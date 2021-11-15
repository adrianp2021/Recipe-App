import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";

const CocktailShow = () => {
  const { id } = useParams();
  console.log(id);

  const [meal, setMeal] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(data.meals[0]);
        // console.log("what is setMeal", setMeal);
        console.log("What is the data on lookup returning", data.meals);
      } catch (err) {
        console.log(err);
        setHasError(true);
      }
    };
    getRecipes();
  }, [id]);


  return (
    <section className="section">
      <div >
        {meal ? (
          <div>
            <h2 >{meal.strMeal}</h2>
            <hr />
            <div>
              <div>
                <figure>
                  <img src={meal.strMealThumb} alt=""/>
                </figure>
              </div>
              <div>
                <h4>
                  <span role="img" aria-label="plate">
                    Category
                  </span>
                </h4>
                <p>{meal.strCategory}</p>
                <hr />
                <h4>
                  <span role="img" aria-label="globe"></span>
                  Alcoholic/Non-alcoholic
                </h4>
                <p>{meal.strArea}</p>
                <hr />
                <h4>
                  <span role="img" aria-label="globe"></span>Glass Type
                </h4>
                {meal.strTags}
                <hr />
                <h4>Ingredients</h4>
                <p>
                  {meal.strMeasure1} {meal.strIngredient1}
                </p>
                <p>
                  {meal.strMeasure2} {meal.strIngredient2}
                </p>
                <p>
                  {meal.strMeasure3} {meal.strIngredient3}
                </p>
                <p>
                  {meal.strMeasure4} {meal.strIngredient4}
                </p>
                <p>
                  {meal.strMeasure5} {meal.strIngredient5}
                </p>
                <p>
                  {meal.strMeasure6} {meal.strIngredient6}
                </p>
                <hr />
                <h4>
                  <span role="img" aria-label="globe"></span>Instructions
                </h4>
                <p>{meal.strInstructions}</p>
                <hr />
              </div>
            </div>
          </div>
        ) : (
          <h2 className="title has-text-centered">
            {hasError ? (
              "Oops, something went wrong!"
            ) : (
              <DotLoader />
            )}
          </h2>
        )}
      </div>
    </section>
  );
};

export default CocktailShow;
