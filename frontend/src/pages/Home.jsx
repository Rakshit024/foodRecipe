import React from "react";
import foodRecipe from "../assets/foodrecipe.png";
import RecipeItem from "../components/RecipeItem";

export default function Home() {
  return (
    <>
      {" "}
      <section className="home">
        <div className="left">
          <h1>Food Rrecipe</h1>
          <h5>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit tenetur, totam quasi harum eveniet nesciunt unde ex
            excepturi ipsum dolorem omnis blanditiis at sapiente adipisci autem
            facere doloremque. Vero itaque saepe corporis placeat.
          </h5>
          <button>Share your recipe</button>
        </div>
        <div className="right">
          <img
            src={foodRecipe}
            alt="food recipe image"
            width="320px"
            height="320px"
          />
        </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="100"
            d="M0,128L40,117.3C80,107,160,85,240,106.7C320,128,400,192,480,181.3C560,171,640,85,720,69.3C800,53,880,107,960,154.7C1040,203,1120,245,1200,266.7C1280,288,1360,288,1400,288L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="recipe">
        <RecipeItem />
      </div>
    </>
  );
}
