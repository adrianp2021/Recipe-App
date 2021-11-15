import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Container,
  Grid,
  Modal,
  Button,
  ButtonOr,
} from "semantic-ui-react";
import { AiOutlineTags } from "react-icons/ai";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { CgUserList } from "react-icons/cg";

const CocktailCard = ({
  idMeal,
  strMeal,
  strMealThumb,
  strInstructions,
  strArea,
  strTags,
}) => {
  return (
    <Link to={`/recipe/${idMeal}`}>
      <Container>
        <Card id="recipe-card-on-search">
          <Image
            size="medium"
            src={strMealThumb}
            wrapped
            className="image-search-recipe"
          />
          <div className="recipe-name">{strMeal}</div>
          <span>
            <GiEarthAfricaEurope />
            {strArea}
          </span>
          <div className="recipe-instructions-card">
            <CgUserList className="recipe-tag" />
            {strInstructions.substring(0, 50) + "..."}
          </div>
          <Button className="recipe-button">Full recipe</Button>
        </Card>
      </Container>
    </Link>
  );
};

export default CocktailCard;
