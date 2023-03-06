import InputForm from "./InputForm";
import IngredientsList from "./IngredientsList";
import Context from "../../Context/DataContext.js";
import React, { useContext } from "react";

export default function MainInput() {
  //passing data using context
  const { ingredients, setIngredients, recipes, setRecipes } =
    useContext(Context);

  return (
    <div className="MainInput">
      <Context.Provider
        value={{ ingredients, setIngredients, recipes, setRecipes }}
      >
        <InputForm />
        <IngredientsList />
      </Context.Provider>
    </div>
  );
}
