//get react lib
import React, { useState } from "react";

//get helper functions from utility file
import { postMany } from "../../Utils/APIreqs";

//creating and exporting InputForm function component
export default function InputForm() {

  // inititate state of ingredients
  const [ingredients, setIngredients] = useState("");

  //setting value of ingredients on event change on the form
  function onChange(event) {
    setIngredients(event.target.value);
  }

  //sending values to server to store in DB
  function handleSubmit(e) {
    e.preventDefault();
    postMany({ ingredients: ingredientsArray }).then((res) => console.log(res));
    setIngredients("");
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
