//get helper functions from utility file
import { deleteOne } from "../../Utils/APIreqs";

//get react lib
import React, { useContext } from "react";

//Access Context
import Context from "../../Context/DataContext.js";

//creating and exporting IngredientsList function component
export default function IngredientsList() {
  
  //access data from context store
  const {ingredients, setIngredients } = useContext(Context);

  //function to handle delete button using Utils helper function
  const handleDelete = (id) => {
    try {
      (async function dbDelete() {
        await deleteOne(id);
      })()
      const newArr = ingredients.filter(ing => ing._id !== id);
      setIngredients(newArr);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="IngredientsList">
    <div className="pantry">PANTRY</div>
        {ingredients.map((ing) => {
          return (
            <div className="ing" key={ing._id}>
              <span>{ing.name}</span>
              <button onClick={() => handleDelete(ing._id)}>Delete</button>
            </div>
          );
        })
      }
    </div>
  );
}
