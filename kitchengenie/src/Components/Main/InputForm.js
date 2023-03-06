import React, { useState, useContext } from "react";
import { postMany } from "../../Utils/APIreqs";
import Context from "../../Context/DataContext";

export default function InputForm() {
  //usestate for text input
  const [textValue, setTextValue] = useState("");

  //access ingredients from context store
  const { setIngredients } = useContext(Context);

  //setting value of ingredients on event change on the form
  function onChange(event) {
    setTextValue(event.target.value);
  }

  //sending values to server to store in DB
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await postMany({ ingredients: textValue.split(",") });
    setIngredients((prev) => [...res, ...prev]);
    setTextValue("");
  }

  //disabled add button if no input value from client
  const ingredientsArray = textValue.split(",");
  const isDisabled = ingredientsArray.length < 3;

  return (
    <div className="InputForm">
      <h2>ADD INGREDIENTS</h2>
      <form onSubmit={handleSubmit}>
        <label>At least three ingredients</label>
        <input
          name="ingredients"
          placeholder="Rice,Tomato..."
          type="text"
          value={textValue}
          onChange={onChange}
        />
        <button
          type="Add"
          disabled={isDisabled}
          className={isDisabled ? "disabled" : ""}
        >
          Add
        </button>
      </form>
    </div>
  );
}
