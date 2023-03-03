//get react lib
import React, { useState, useContext} from "react";

//get helper functions from utility file
import { postMany } from "../../Utils/APIreqs";

//Access Context
import Context from "../../Context/DataContext";

//creating and exporting InputForm function component
export default function InputForm() {
  //usestate for text input
  const [textValue, setTextValue] = useState('');

  //access ingredients from context store
  const {setIngredients}  = useContext(Context);

  //setting value of ingredients on event change on the form
  function onChange(event) {
   setTextValue(event.target.value);
  }

  //sending values to server to store in DB
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await postMany({ ingredients: textValue.split(",") });
    console.log(res, 'res');
    setIngredients(res);
    setTextValue('');
  }

  //disabled add button if no input value from client
  const ingredientsArray = textValue.split(","); // consider using regex to get all words from string
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
          value={textValue}
          onChange={onChange}
        />
        <button type="Add" disabled={isDisabled}>
          Add
        </button>
      </form>
    </div>
  );
}
