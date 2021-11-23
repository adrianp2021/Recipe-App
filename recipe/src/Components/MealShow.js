import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import { Button, Container, Grid, Image } from "semantic-ui-react";
import { MdOutlineArrowBack } from "react-icons/md";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { BsPlus } from "react-icons/bs";
import { AiOutlineTags } from "react-icons/ai";

const MealShow = () => {
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
        setMeal(data.meals);
        // console.log("what is setMeal", setMeal);
        console.log("What is the data on lookup returning", data.meals[0]);
      } catch (err) {
        console.log(err);
        setHasError(true);
      }
    };
    getRecipes();
  }, [id]);

  return (
    <section className="section">
      <div>
        {meal ? (
          <div>
            {meal.map((item, i) => {
              return (
                <div key={i}>
                  <div>
                    <Image
                      src={meal[0].strMealThumb}
                      alt=""
                      wrapped
                      className="recipe-img"
                    />
                  </div>
                  <Link to="/">
                    <MdOutlineArrowBack className="return-icon" />
                  </Link>

                  <div className="recipe-container-rounded-border">
                    <div className="recipe-meal-search-container">
                      <h2 className="recipe-meal-search-name">
                        {meal[0].strMeal}
                      </h2>

                      <div id="display">
                        <GiEarthAfricaEurope className="recipe-meal-search-paragraph" />
                        <p className="recipe-meal-search-paragraph">
                          {meal[0].strArea}
                        </p>
                      </div>
                    </div>

                    <div id="display">
                      <AiOutlineTags className="recipe-meal-search-paragraph" />
                      <p className="recipe-meal-search-paragraph">
                        {/* {meal[0].strTags.split(/[ ,]+/).join(", ")} */}
                        {meal[0].strTags}
                      </p>
                    </div>

                    <div className="recipe-meal-search-ingredients">
                      <h3>Ingredients</h3>
                      <Grid divided="vertically">
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <div>
                              {meal[0].strMeasure1} {meal[0].strIngredient1}
                            </div>
                            <div>
                              {meal[0].strMeasure2} {meal[0].strIngredient2}
                            </div>
                            <div>
                              {meal[0].strMeasure3}{" "}
                              {meal[0].strIngredient3strMeasure3}
                            </div>
                            <div>
                              {meal[0].strMeasure4} {meal[0].strIngredient4}
                            </div>
                            <div>
                              {meal[0].strMeasure5} {meal[0].strIngredient5}
                            </div>
                            <div>
                              {meal[0].strMeasure6} {meal[0].strIngredient6}
                            </div>
                            <div>
                              {meal[0].strMeasure7} {meal[0].strIngredient7}
                            </div>
                            <div>
                              {meal[0].strMeasure8} {meal[0].strIngredient8}
                            </div>
                            <div>
                              {meal[0].strMeasure9} {meal[0].strIngredient9}
                            </div>
                            <div>
                              {meal[0].strMeasure10} {meal[0].strIngredient10}
                            </div>
                          </Grid.Column>

                          <Grid.Column>
                            <div>
                              {meal[0].strMeasure11} {meal[0].strIngredient11}
                            </div>
                            <div>
                              {meal[0].strMeasure12} {meal[0].strIngredient12}
                            </div>
                            <div>
                              {meal[0].strMeasure13} {meal[0].strIngredient13}
                            </div>
                            <div>
                              {meal[0].strMeasure14} {meal[0].strIngredient14}
                            </div>
                            <div>
                              {meal[0].strMeasure15} {meal[0].strIngredient15}
                            </div>
                            <div>
                              {meal[0].strMeasure16} {meal[0].strIngredient16}
                            </div>
                            <div>
                              {meal[0].strMeasure17} {meal[0].strIngredient17}
                            </div>
                            <div>
                              {meal[0].strMeasure18} {meal[0].strIngredient18}
                            </div>
                            <div>
                              {meal[0].strMeasure19} {meal[0].strIngredient19}
                            </div>
                            <div>
                              {meal[0].strMeasure20} {meal[0].strIngredient20}
                            </div>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </div>
                    <div className="recipe-meal-search-instructions">
                      <h3>Instructions</h3>
                      <p>{meal[0].strInstructions}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h2 className="title has-text-centered">
            {hasError ? "Oops, something went wrong!" : <DotLoader />}
          </h2>
        )}
      </div>
    </section>
  );
};

export default MealShow;
