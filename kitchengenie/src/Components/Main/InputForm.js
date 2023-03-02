//get react lib
import React, { useState, useContext } from "react";

//get helper functions from utility file
import { postMany } from "../../Utils/APIreqs";

//import context
import Context from '../../Context/DataContext'

//creating and exporting InputForm function component
export default function InputForm() {

  // inititate state of ingredients
  const [ingredients, setIngredients] = useState("");

  //set state on submit
  const [submitted, setSubmitted] = useState(false);

  //setting value of ingredients on event change on the form
  function onChange(event) {
    setIngredients(event.target.value);
  }

  //sending values to server to store in DB
  function handleSubmit(e) {
    e.preventDefault();
    postMany({ ingredients: ingredientsArray });
    setIngredients("");
    setSubmitted(true);
  }

  //disabled add button if no input value from client
  const ingredientsArray = ingredients.split(","); // consider using regex to get all words from string
  const isDisabled = ingredientsArray.length < 3;

  return (
    <div className="InputForm">
      <h2>ADD INGREDIENTS</h2>
      {/* submit function in use onSubmit */}
      <form onSubmit={handleSubmit}>
        <label>At least three ingredients</label>
        <input
          name="ingredients"
          placeholder="Rice,Tomato..."
          type="text"
          value={ingredients}
          onChange={onChange}
        />
        <button type="Add" disabled={isDisabled}>
          Add
        </button>
      </form>
    </div>
  );
}
