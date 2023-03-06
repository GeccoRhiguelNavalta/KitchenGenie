//import all child components and css file
import "./App.css";
import Logo from "./Components/Logo";
import MainInput from "./Components/Main/MainInput";
import RecipesHolder from "./Components/Recipes/RecipesHolder";
import ReactSwitch from "react-switch";

//get react lib
import React, { useState, useEffect } from "react";

//import context
import Context from "./Context/DataContext";

//get helper functions from utility file
import { getAll, getRecipe } from "./Utils/APIreqs";

//main component
function App() {
  //state for light/dark mode
  const [theme, setTheme] = useState("light");

  // inititate state of ingredients
  const [ingredients, setIngredients] = useState([]);
  // inititate state of recipes
  const [recipes, setRecipes] = useState([]);

  //toggle function light/dark mode
  function toggleSwitch() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

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
      console.error(error);
    }
  }

  //render data on first load
  useEffect(() => {
    fetchIngredients();
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [ingredients]);

  return (
    <div className="App" id={theme}>
      {/* render all main child components and wrapped components in Context.Provider that needs data */}
      <Context.Provider
        value={{
          recipes,
          ingredients,
          setIngredients,
          setRecipes,
          theme,
          toggleSwitch,
        }}
      >
        <Logo />
        <div className="switch">
          <label>{theme === "light" ? "LIGHT MODE" : "DARK MODE"}</label>
          <ReactSwitch onChange={toggleSwitch} checked={theme === "dark"} />
        </div>
        <MainInput />
        <RecipesHolder />
      </Context.Provider>
    </div>
  );
}

export default App;
