import React, { useState, useEffect } from "react";
// import { DotLoader } from "react-spinners";
import {
  Card,
  Image,
  Modal,
  Button,
  Divider,
  Container,
  Grid,
} from "semantic-ui-react";

import { IoLogoYoutube } from "react-icons/io";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { AiOutlineTags } from "react-icons/ai";

const RandomMeals = () => {
  const [meal, setMeal] = useState(undefined);
  const [open, setOpen] = React.useState(false);

  const apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  useEffect(() => {
    async function retrieveMeal() {
      const res = await fetch(apiURL);
      // console.log("what is res ->", res);
      const data = await res.json();
      // console.log("what is data ->", data);
      setMeal(data.meals[0]);
    }
    retrieveMeal();
  }, []);

  if (!meal) return null;

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    strArea,
    strTags,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
  } = meal;

  return (
    <main>
      <div>
        {/* <p className="recipe-of-the-day">Recipe of the day</p> */}
      </div>

      <Card id="card">
        <Image src={strMealThumb} alt="" id="image" ui={false} />

        <Card.Content>
          <Card.Header id="meal-name">{strMeal}</Card.Header>
        </Card.Content>

        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button onClick={() => setOpen(false)}>See how it's done</Button>
          }
        >
          <div id="modal-category-name-style">
            <h2 id="modal-category-name">{strCategory}</h2>
          </div>

          {/* <Divider /> */}

          <Container>
            <Modal.Content image>
              <Image
                size="medium"
                src={strMealThumb}
                wrapped
                id="modal-meal-image"
              />
            </Modal.Content>

            <Modal.Header id="modal-meal-name">
              <h3>{strMeal}</h3>
            </Modal.Header>

            <Modal.Header id="modal-meal-area">
              <div id="modal-meal-area-div">
                <AiOutlineTags id="tag" />
                {strTags}
              </div>
              <div id="modal-meal-area-div">
                <GiEarthAfricaEurope id="earth" />
                {strArea}
              </div>
            </Modal.Header>

            <h3>Ingredients</h3>
            <Grid divided="vertically">
              <Grid.Row columns={3}>
                <Grid.Column id="modal-meal-ingredients">
                  <div id="modal-meal-ingredients-space">{strMeasure1} {strIngredient1}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure2} {strIngredient2}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure3} {strIngredient3}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure4} {strIngredient4}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure5} {strIngredient5}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure6} {strIngredient6}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure7} {strIngredient7}</div>
                </Grid.Column>

                <Grid.Column id="modal-meal-ingredients">
                  <div id="modal-meal-ingredients-space">{strMeasure8} {strIngredient8}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure9} {strIngredient9}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure10} {strIngredient10}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure11} {strIngredient11}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure12} {strIngredient12}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure13} {strIngredient13}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure14} {strIngredient14}</div>
                </Grid.Column>

                <Grid.Column id="modal-meal-ingredients">
                  <div id="modal-meal-ingredients-space">{strMeasure15} {strIngredient15}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure16} {strIngredient16}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure17} {strIngredient17}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure18} {strIngredient18}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure19} {strIngredient19}</div>
                  <div id="modal-meal-ingredients-space">{strMeasure20} {strIngredient20}</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>

          <Modal.Description>
            <h5 id="modal-meal-description">{strInstructions}</h5>
          </Modal.Description>

          <Modal.Description id="youtube">
            <h4>Click to watch now</h4>
            <a
              href={strYoutube}
              target="_blank"
              id="logo-youtube"
              rel="noreferrer"
            >
              <IoLogoYoutube />
            </a>
          </Modal.Description>
          <div id="modal-meal-button-div">
            <Button onClick={() => setOpen(false)} id="modal-meal-button">
              Close
            </Button>
          </div>
        </Modal>
      </Card>
    </main>
  );
};

export default RandomMeals;
