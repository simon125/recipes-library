import { FC } from "react";
import { RecipeType } from "../../../types";
import { RecipeRow } from "./RecipeRow";

interface RecipesTableProps {
  recipes: RecipeType[];
}

export const RecipesTable: FC<RecipesTableProps> = ({ recipes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Difficulty</th>
          <th>Prep time (min)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe) => (
          <RecipeRow key={recipe.id} recipe={recipe} />
        ))}
      </tbody>
    </table>
  );
};
