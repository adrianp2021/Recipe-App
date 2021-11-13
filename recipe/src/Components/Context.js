// import axios from "axios";
// import React, { createContext, useCallback, useState } from "react";

// export const myContext = createContext();

// const Context = ({ children }) => {
//   const [meals, setMeals] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [randomMeam, setRandomMeal] = useState([]);

//   const fetchMealData = useCallback((searchTerm) => {
//     axios
//       .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
//       .then((res) => {
//         console.log(res.data);
//       });
//   }, []);

//   return (
//     <myContext.Provider value={{ fetchMealData }}>
//       {children}
//     </myContext.Provider>
//   );
// };

// export default Context;
