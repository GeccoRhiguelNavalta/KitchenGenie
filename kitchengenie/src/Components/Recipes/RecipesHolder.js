//get react lib
import React, { useState, useEffect } from "react";

//get helper function from utils file
import { getRecipe } from "../../Utils/APIreqs";

//import child component to render
import RecipeItem from "./RecipeItem";

//creating and exporting RecipesHolder function component, essentially
//just a container
export default function RecipesHolder() {
  // inititate state of recipes
  const [recipes, setRecipes] = useState([]);

  //get recipe from server
  async function fetchRecipes() {
    const fetchedrecipes = await getRecipe();
    setRecipes(fetchedrecipes);
  }

  //auto re render on any changes on the recipes
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="RecipesHolder">
      {/* pass down recipes as props for recipeitem to render */}
        <RecipeItem recipes={recipes} />
    </div>
  );
}
