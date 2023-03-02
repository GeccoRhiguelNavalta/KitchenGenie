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
  const data = useContext(Context);

  return (
    <div className="MainInput">
      <InputForm />
      <Context.Provider value={data}>
      <IngredientsList />
      </Context.Provider>
    </div>
  );
}
