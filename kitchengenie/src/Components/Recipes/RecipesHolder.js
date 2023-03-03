//get react lib
import React, { useContext } from "react";

//import child component to render
import RecipeItem from "./RecipeItem";

//Access Context
import Context from "../../Context/DataContext.js";

//creating and exporting RecipesHolder function component, essentially
//just a container
export default function RecipesHolder() {

 //passing data using context
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
