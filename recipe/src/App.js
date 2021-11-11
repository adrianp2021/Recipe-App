import '../src/App.scss'

import RandomMeals from "./Components/RandomMeals";
import MealCategories from './Components/MealCategories';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <MealCategories />
    <RandomMeals />
    </div>
  );
}

export default App;
