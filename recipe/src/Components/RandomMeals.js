import React, { useState, useEffect } from 'react';

const RandomMeals = () => {

  const [meal, setMeal] = useState(undefined)

  const apiURL = 'https://www.themealdb.com/api/json/v1/1/random.php'

  useEffect(() => {
    async function retrieveMeal() {
      const res = await fetch(apiURL)
      console.log('what is res ->', res)
      const data = await res.json()
      console.log('what is data ->', data)
    }
    retrieveMeal()
  }, [])

  return (
    <div>
      
    </div>
  );
};

export default RandomMeals;