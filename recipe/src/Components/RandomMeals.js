import React, { useState, useEffect } from "react";

const RandomMeals = () => {
  const [meal, setMeal] = useState(undefined);

  const apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  useEffect(() => {
    async function retrieveMeal() {
      const res = await fetch(apiURL);
      console.log("what is res ->", res);
      const data = await res.json();
      console.log("what is data ->", data);
      setMeal(data.meals[0])
    }
    retrieveMeal();
  }, []);

  if (!meal) return null;

  return (
    <div>
    <div>{meal.strMeal}</div>
    </div>
  );
};

export default RandomMeals;
