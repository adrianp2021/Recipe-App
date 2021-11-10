import React, { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import { Card, Image } from "semantic-ui-react";

const RandomMeals = () => {
  const [meal, setMeal] = useState(undefined);

  const apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  useEffect(() => {
    async function retrieveMeal() {
      const res = await fetch(apiURL);
      console.log("what is res ->", res);
      const data = await res.json();
      console.log("what is data ->", data);
      setMeal(data.meals[0]);
    }
    retrieveMeal();
  }, []);

  if (!meal) return null;

  const {
    strMeal,
    strMealThumb,
    strDrinkAlternate,
    strCategory,
    strInstructions,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  } = meal;

  return (
    <main>
              <div>
          <p className="recipe-of-the-day">Recipe of the day</p>
        </div>


      <Card id="card">

        <Image src={strMealThumb} alt="" id="image" ui={false} />

        <Card.Content>
          <Card.Header id="meal-name">{strMeal}</Card.Header>
        </Card.Content>

      </Card>

      {/* <div>Complimentary drink {strDrinkAlternate}</div>
      <div>{strCategory}</div>
      <div>{strInstructions}</div> */}
      {/* <div>{strYoutube}</div> */}
      {/* <div>
        <div>{strIngredient1}</div>
        <div>{strIngredient2}</div>
        <div>{strIngredient3}</div>
        <div>{strIngredient4}</div>
        <div>{strIngredient5}</div>
        <div>{strIngredient6}</div>
        <div>{strIngredient7}</div>
        <div>{strIngredient8}</div>
        <div>{strIngredient9}</div>
        <div>{strIngredient10}</div>
        <div>{strIngredient11}</div>
        <div>{strIngredient12}</div>
        <div>{strIngredient13}</div>
        <div>{strIngredient14}</div>
        <div>{strIngredient15}</div>
        <div>{strIngredient16}</div>
        <div>{strIngredient17}</div>
        <div>{strIngredient18}</div>
        <div>{strIngredient19}</div>
        <div>{strIngredient20}</div>
      </div> */}
    </main>
  );
};

export default RandomMeals;
