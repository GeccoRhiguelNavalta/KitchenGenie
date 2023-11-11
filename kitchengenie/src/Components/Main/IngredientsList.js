import { deleteOne } from "../../Utils/APIreqs";
import React, { useContext } from "react";
import Context from "../../Context/DataContext.js";

export default function IngredientsList() {
  const { ingredients, setIngredients } = useContext(Context);

  const handleDelete = (id) => {
    try {
      (async function dbDelete() {
        await deleteOne(id);
      })();
      const filteredIngredients = ingredients.filter(
        (ingredient) => ingredient._id !== id
      );
      setIngredients(filteredIngredients);
    } catch (error) {
      console.error(error);
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
      })}
    </div>
  );
}
