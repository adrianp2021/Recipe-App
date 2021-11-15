import React from "react";
import MealCategories from "../Components/MealCategories";
import SearchBar from "../Components/SearchBar";
import RandomMeals from "../Components/RandomMeals";

const Home = () => {
  return (
    <>
      <MealCategories />
      <SearchBar />
      <RandomMeals />
    </>
  );
};

export default Home;
