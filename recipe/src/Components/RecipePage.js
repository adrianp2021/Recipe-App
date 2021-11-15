import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

const CocktailCard = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <Link to={`/recipe/${idMeal}`}>
      <Card id="recipe-card-on-search">
        <div className="recipe-box">
          <div className="recipe-name">{strMeal}</div>

          <img src={strMealThumb} alt="" className="recipe-image" />
        </div>
      </Card>
    </Link>
  );
};

export default CocktailCard;
