import { FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RecipeType } from "../../types";
import { Rating } from "./components/Rating";

export const RecipeDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeType | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setRecipe(data);
      })
      .catch(() => {});
  }, [id]);

  if (!recipe) {
    return <article>Loading...</article>;
  }

  return (
    <article>
      <h1>{recipe.name}</h1>

      <img
        style={{ width: "40%", marginBottom: 50 }}
        src={recipe.image}
        alt=""
      />
      <p>Ingredients</p>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>Instructions</p>
      <ul>
        {recipe.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>
      <p>Servings: {recipe.servings}</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>
        Rating: <Rating rating={recipe.rating} />
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Link to="/recipes" role="button" style={{ margin: 0 }}>
          Wróć do przepisów
        </Link>
        <button style={{ width: "fit-content", margin: 0 }}>
          Wystaw recenzje
        </button>
      </div>
    </article>
  );
};
