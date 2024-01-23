import { FC } from "react";
import { Link } from "react-router-dom";

import { RecipeType } from "../../../types";

interface RecipeProps {
  recipe: RecipeType;
}

export const RecipeRow: FC<RecipeProps> = ({ recipe }) => {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.difficulty}</td>
      <td>{recipe.prepTimeMinutes}</td>
      <td>
        <Link to={`/recipes/${recipe.id}`}>Ugotuj</Link>
      </td>
    </tr>
  );
};
