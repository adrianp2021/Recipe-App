import '../src/App.scss'

import RandomMeals from "./Components/RandomMeals";
import MealCategories from './Components/MealCategories';

function App() {
  return (
    <div className="App">
    <MealCategories />
    <RandomMeals />
    </div>
  );
}

export default App;
