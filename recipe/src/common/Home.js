import React from "react";
import MealCategories from "../Components/MealCategories";
import SearchBar from "../Components/SearchBar";
import RandomMeals from "../Components/RandomMeals";
import Navbar from "../Components/Navbar";
import TestApi from "../Components/TestApi";
// import FooterNav from "../Components/FooterNav";

const Home = () => {
  return (
    <>
      <Navbar />
      <TestApi />
      <MealCategories />
      <SearchBar />

      <RandomMeals />
{/* 
      <FooterNav /> */}
    </>
  );
};

export default Home;
