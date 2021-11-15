import "../src/App.scss";

import RandomMeals from "./Components/RandomMeals";
import MealCategories from "./Components/MealCategories";
import Navbar from "./Components/Navbar";
import MealCard from "./Components/MealCard";
import Home from "./common/Home";
import MealShow from './Components/MealShow'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="meal-categories" element={<MealCategories />} />
        <Route path="random-meals" element={<RandomMeals />} />
        <Route path="search-meal" element={<MealCard />} />
        <Route path="/recipe/:id" element={<MealShow />} />
      </Routes>
    </div>
  );
}

export default App;
