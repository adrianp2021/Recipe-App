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
  } = meal;

  return (
    <main>
      <div>
        <p className="recipe-of-the-day">Recipe of the day</p>
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
          trigger={<Button>See how it's done</Button>}
        >
          <Modal.Header>
            <h2 id="modal-category-name">{strCategory}</h2>
          </Modal.Header>

          <Container>
            <Modal.Content image>
              <Image size="medium" src={strMealThumb} wrapped />
            </Modal.Content>

            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div>{strIngredient1}</div>
                  <div>{strIngredient2}</div>
                  <div>{strIngredient3}</div>
                  <div>{strIngredient4}</div>
                  <div>{strIngredient5}</div>
                  <div>{strIngredient6}</div>
                  <div>{strIngredient7}</div>
                  <div>{strIngredient8}</div>
                  <div>{strIngredient9}</div>
                  <div>{strIngredient10}</div>
                </Grid.Column>
                <Grid.Column>
                  <div>{strIngredient11}</div>
                  <div>{strIngredient12}</div>
                  <div>{strIngredient13}</div>
                  <div>{strIngredient14}</div>
                  <div>{strIngredient15}</div>
                  <div>{strIngredient16}</div>
                  <div>{strIngredient17}</div>
                  <div>{strIngredient18}</div>
                  <div>{strIngredient19}</div>
                  <div>{strIngredient20}</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>

          <Modal.Header id="modal-meal-name">
            <h3 className="posh">{strMeal}</h3>
          </Modal.Header>

          <Modal.Description>
            <h5 id="modal-meal-description">{strInstructions}</h5>
          </Modal.Description>

          <Modal.Description>
            <a href={strYoutube} target="_blank" rel="noreferrer">
              See video
            </a>
          </Modal.Description>

          <Button onClick={() => setOpen(false)} id="modal-meal-button">
            Close
          </Button>
        </Modal>
      </Card>
      {/* <h3>see recipe */}

      {/* <div>{strCategory}</div> */}
    </main>
  );
};

export default RandomMeals;
