//importing child components to render on page
import InputForm from "./InputForm";
import IngredientsList from "./IngredientsList";

//Access Context
import Context from "../../Context/DataContext.js";

//get react lib
import React, { useContext } from "react";

//creating and exporting MainInput function component, essentially
//just a container
export default function MainInput() {

  //passing data using context
  const {ingredients, setIngredients,recipes, setRecipes} = useContext(Context);

  return (
    <div className="MainInput">
      <Context.Provider value={{ ingredients, setIngredients,recipes, setRecipes}}>
      <InputForm />
      <IngredientsList />
      </Context.Provider>
    </div>
  );
}
