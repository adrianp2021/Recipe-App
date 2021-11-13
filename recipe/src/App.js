import "../src/App.scss";

import RandomMeals from "./Components/RandomMeals";
import MealCategories from "./Components/MealCategories";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MealCategories />

      <SearchBar />

      <RandomMeals />
    </div>
  );
}

export default App;
