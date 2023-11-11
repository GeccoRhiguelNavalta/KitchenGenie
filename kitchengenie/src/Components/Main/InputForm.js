import React, { useState, useContext } from "react";
import { postMany } from "../../Utils/APIreqs";
import Context from "../../Context/DataContext";

export default function InputForm() {
  const [textValue, setTextValue] = useState("");

  const { setIngredients } = useContext(Context);

  function onChange(event) {
    setTextValue(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await postMany({ ingredients: textValue.split(",") });
    setIngredients((prev) => [...res, ...prev]);
    setTextValue("");
  }

  const ingredientsArray = textValue.split(",");
  const isDisabled = ingredientsArray.length < 3;

  return (
    <div className="InputForm">
      <h2>ADD INGREDIENTS</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ADD THREE OR MORE INGREDIENTS SEPARATED BY COMMAS BEFORE ENTERING
        </label>
        <input
          name="ingredients"
          placeholder="Example: rice,tomato,carrots"
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
