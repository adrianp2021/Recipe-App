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

const RecipePage = ({
  idMeal,
  strMeal,
  strMealThumb,
  strInstructions,
  strArea,
  strTags,
}) => {
  return (
    <Link to={`/recipe/${idMeal}`}>
      {/* <Container> */}
      <Card id="recipe-card-on-search">
        <Image
          // size="medium"
          src={strMealThumb}
          wrapped
          className="image-search-recipe"
        />
        <div className="recipe-name">{strMeal}</div>
        <div>
          <span>
            <GiEarthAfricaEurope />
            {strArea}
          </span>
        </div>
        <div className="recipe-instructions-card">
          <CgUserList />
          {strInstructions.substring(0, 60) + "..."}
        </div>
        <div id="recipe-button-container">
          <Button id="special">Full recipe</Button>
        </div>
      </Card>
      {/* </Container> */}
    </Link>
  );
};

export default RecipePage;
