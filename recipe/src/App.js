import "../src/App.scss";

import RandomMeals from "./Components/RandomMeals";
import MealCategories from "./Components/MealCategories";
// import Navbar from "./Components/Navbar";
import MealCard from "./Components/MealCard";
import Home from "./common/Home";
import MealShow from "./Components/MealShow";
// import RecipePage from './Components/RecipePage'
import { Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="meal-categories" element={<MealCategories />} />
        <Route path="random-meals" element={<RandomMeals />} />
        <Route path="search-meal" element={<MealCard />} />
        <Route path="/recipe/:id" element={<MealShow />} />
        <Route path="/search" element={<SearchBar />} />
        
        {/* <Route path="/recipe" element={<RecipePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
