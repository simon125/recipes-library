import { FC, useContext, useEffect, useState } from "react";
import { RecipeType } from "../../types";
import { RecipesTable } from "./components/RecipesTable";
import { RecipesSearchContext } from "../../contexts/RecipesSearchContext";

export const Recipes: FC = () => {
  const { searchPhrase, setSearchPhrase } = useContext(RecipesSearchContext);
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch(() => {});
  }, []);

  const filteredRecipes =
    searchPhrase.trim().length === 0
      ? recipes
      : recipes.filter((recipe) => recipe.name.match(searchPhrase));

  return (
    <>
      <article style={{ display: "flex", gap: 20 }}>
        <input
          value={searchPhrase}
          onChange={({ target }) => {
            setSearchPhrase(target.value);
          }}
          type="text"
          placeholder="Search by name"
        />
        <button
          onClick={() => {
            setSearchPhrase("");
          }}
          style={{ width: "fit-content" }}
        >
          Reset
        </button>
      </article>
      <article>
        <RecipesTable recipes={filteredRecipes} />
      </article>
    </>
  );
};
