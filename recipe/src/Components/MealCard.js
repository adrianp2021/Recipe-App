import React from "react";

const MealCard = ({ strCategory, strCategoryThumb }) => {
  
  return (
    <div>
      <img src={strCategoryThumb} alt="" className="category-image" />
      <h3 className="category-name">{strCategory}</h3>
    </div>
  );
};

export default MealCard;