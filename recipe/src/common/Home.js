import React from "react";
import MealCategories from "../Components/MealCategories";
import SearchBar from "../Components/SearchBar";
import RandomMeals from "../Components/RandomMeals";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
      <MealCategories />
      <SearchBar />
      <RandomMeals />
    </>
  );
};

export default Home;
