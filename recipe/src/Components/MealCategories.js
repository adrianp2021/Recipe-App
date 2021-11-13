import React, { useState, useEffect } from "react";
// import { Item } from "semantic-ui-react";
// import MealCard from "./MealCard";

const MealCategories = () => {
  const [categories, setCategories] = useState(undefined);
  const categoriesApiUrl =
    "https://www.themealdb.com/api/json/v1/1/categories.php";

  useEffect(() => {
    async function retrieveCategory() {
      const res = await fetch(categoriesApiUrl);
      // console.log("what is res (categories) ->", res);
      const data = await res.json();
      // console.log("what is data (categories) ->", data);
      setCategories(data.categories);
      console.log("data.categories -> ", data.categories);
    }
    retrieveCategory();
  }, []);

  

  if (!categories) return null;

  return (
    <section id="category-section">
      {categories.map((item) => {
        return (
          <div className="category-box">
            <img
              key={item}
              src={item.strCategoryThumb}
              alt=""
              className="category-image"
            />
            <h3 className="category-name">{item.strCategory}</h3>
          </div>
        );
      })}
    </section>
  );
};

export default MealCategories;
