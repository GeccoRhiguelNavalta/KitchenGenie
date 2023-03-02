//get react lib
import React, { useState, useEffect } from "react";

//creating and exporting RecipeItem function component
export default function RecipeItem(props) {
  //useState and useEffect to keep track of changes
  const [rec, setRec] = useState(props.recipes.recipe);

  useEffect(() => {
    setRec(props.recipes.recipe);
  }, [props.recipes.recipe]);

  return (
    // render target data from api
    <div className="RecipeItem">
      <div className="left-container">
        <img className="recipeImg" src={rec.image} alt="recipe"/>
        <div className="right-container">
          <div className="ingredients">
            <span>Main Ingredients:</span>
            {rec.ingredientLines.map((ing, index) => {
              return <ul key={index}>{ing}</ul>;
            })}
          </div>
          <button>
            <a href={rec.url}>Recipe</a>
          </button>
          <div className="yield">
            <span>People: </span>
            {rec.yield}
          </div>
        </div>
      </div>
    </div>
  );
}
