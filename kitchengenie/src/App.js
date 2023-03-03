//import all child components and css file
import "./App.css";
import Logo from "./Components/Logo";
import MainInput from "./Components/Main/MainInput";
import RecipesHolder from "./Components/Recipes/RecipesHolder";

//get react lib
import React, { useState, useEffect } from "react";

//import context
import Context from "./Context/DataContext";

//get helper functions from utility file
import { getAll, getRecipe } from "./Utils/APIreqs";

//main component
function App() {
  // inititate state of ingredients
  const [ingredients, setIngredients] = useState([]);
  // inititate state of recipes
  const [recipes, setRecipes] = useState([]);

  //async function to get data from mongoDB (client's ingredients input from input form)
  async function fetchIngredients() {
    try {
      const fetchedData = await getAll();
      setIngredients(fetchedData);
    } catch (error) {
      console.log(error);
    }
  }

  //get recipe from server
  async function fetchRecipes() {
    try {
      const fetchedrecipes = await getRecipe();
      setRecipes(fetchedrecipes);
    } catch (error) {
      console.error(error)
    }
  }

  //render data on first load
  useEffect(() => {
    fetchIngredients();
    fetchRecipes();
  }, []);

  return (
    <div className="App">
      {/* render all main child components and wrapped components in Context.Provider that needs data */}
      <Logo />
      <Context.Provider value={{recipes, ingredients, setIngredients,fetchIngredients}}>
        <MainInput />
        <RecipesHolder />
      </Context.Provider>
    </div>
  );
}

export default App;
