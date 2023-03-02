//get helper functions from utility file
import { deleteOne } from "../../Utils/APIreqs";

//get react lib
import React, { useContext } from "react";

//Access Context
import Context from "../../Context/DataContext.js";

//creating and exporting IngredientsList function component
export default function IngredientsList() {
  //access data from context store
  const data  = useContext(Context);

  //function to handle delete button using Utils helper function
  const handleDelete = (id) => {
    deleteOne(id);
  };


  return (
    <div className="IngredientsList">
      <p>PANTRY</p>

      {/* ternary condition on what to render if no ingredients or have ingredients */}
      {data.length === 0 ? (
        <div className="noIng">NO INGREDIENTS YET...!</div>
      ) : (
        /* iterate through data to render ingredients */

        data.map((ing) => {
          return (
            <div key={ing._id}>
              <span>{ing.name}</span>
              <button onClick={() => handleDelete(ing._id)}>Delete</button>
            </div>
          );
        })
      )}
    </div>
  );
}
