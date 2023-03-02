//get helper functions from utility file
import { getAll, deleteOne } from "../../Utils/APIreqs";

//get react lib
import React, { useState, useEffect } from "react";

//creating and exporting IngredientsList function component
export default function IngredientsList() {
  
  // inititate state of data being used
  const [data, setData] = useState([]);

  //async function to get data from mongoDB (client's ingredients input from input form)
  async function fetchData() {
    const fetchedData = await getAll();
    setData(fetchedData);
    console.log(fetchedData);
  }

  //function to handle delete button using Utils helper function
  const handleDelete = (id) => {
    deleteOne(id);
  };

  //auto re render on any changes on the data
  useEffect(() => {
    fetchData();
  }, []);

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
