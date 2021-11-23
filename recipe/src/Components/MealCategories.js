import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { Item } from "semantic-ui-react";
// import MealCard from "./MealCard";

const MealCategories = () => {
  const [categories, setCategories] = useState(undefined);
  const categoriesApiUrl =
    "https://www.themealdb.com/api/json/v1/1/categories.php";

  // const categoryApiUrl = "www.themealdb.com/api/json/v1/1/filter.php?c=";
  const [category, setCategory] = useState([]);

  const { id } = useParams;

  useEffect(() => {
    async function retrieveCategory() {
      const res = await fetch(categoriesApiUrl);
      // console.log("what is res (categories) ->", res);
      const data = await res.json();
      // console.log("what is data (categories) ->", data);
      setCategories(data.categories);
      // console.log("data.categories -> ", data.categories[0]);
    }
    retrieveCategory();
  }, []);

  useEffect(() => {
    async function getCategory() {
      const { data } = await axios.get(
        `www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
      );
      setCategories(data);
      console.log("what is data -> ", data);
    }
    getCategory();
  }, [id]);

  // useEffect(() => {
  const handleClick = () => {
    const { data } = fetch(
      `www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
    );
    // console.log('what is res => ', res)
    // const data = res.json()
    setCategory(data);
    console.log("data", data);
  };

  if (!categories) return null;

  return (
    <section id="category-section">
      {categories.map((item, i) => {
        return (
          <div className="category-box" onClick={handleClick} key={i}>
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
