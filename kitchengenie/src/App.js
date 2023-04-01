import "./App.css";
// import LoginButton from './Components/LoginButton';
// import LogoutButton from './Components/LogoutButton';
import Logo from "./Components/Logo";
import MainInput from "./Components/Main/MainInput";
import RecipesHolder from "./Components/Recipes/RecipesHolder";
import ReactSwitch from "react-switch";
import React, { useState, useEffect } from "react";
import Context from "./Context/DataContext";
import { getAll, getRecipe } from "./Utils/APIreqs";
import { useAuth0 } from "@auth0/auth0-react";

//main component
function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
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
      ({isAuthenticated} && (<button onClick={() => logout()}>Log Out</button>)) : (
      {!isAuthenticated} && (<button onClick={() => loginWithRedirect()}>Log In</button>))
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
