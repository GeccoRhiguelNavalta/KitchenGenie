//get react lib
import React, { useState } from "react";

//get helper functions from utility file
import { postOne } from "../../Utils/APIreqs";

//creating and exporting InputForm function component
export default function InputForm() {

  // inititate state of ingredients
  const [ingredients, setIngredients] = useState("");

  //setting value of ingredients on event change on the form
  function onChange(event) {
    setIngredients(event.target.value);
  }

  //sending values to server to store in DB
  function handleSubmit(event) {
    event.preventDefault();
    const ingredientsArray = ingredients.split(",");
    postOne(ingredientsArray);
    setIngredients("");
  }

  //disabled add button if no input value from client NEED TO FIX!
  const isDisabled = !ingredients;
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
        {/* NEED TO FIX */}
        <button type="Add" disabled={isDisabled}>
          Add
        </button>
      </form>
    </div>
  );
}
