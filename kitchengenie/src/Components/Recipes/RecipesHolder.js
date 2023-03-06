import React, { useContext } from "react";
import RecipeItem from "./RecipeItem";
import Context from "../../Context/DataContext.js";

export default function RecipesHolder() {
 const {recipes} = useContext(Context);

  return (
    <div className="RecipesHolder">
      {/* pass down recipes as context for recipeitem to render */}
      <div className="Recipes">RECIPES</div>
      {recipes.map((item,index)=> {
        return(
        <RecipeItem key={index} recipes={item} />
        )
      })}
    </div>
  );
}
