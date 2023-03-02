import React from "react";

export default function RecipeItem(props) {
  const data = props.recipes.recipe;
  console.log(data, 'this');

  return (
    <div className="RecipeItem">
        <div className="left-container">
          <img className="recipeImg" src={data.image}/>
          <div className="right-container">
            <div className="ingredients"> <span>Main Ingredients:</span> 
            {data.ingredientLines.map((ing)=> {
              return(
                <ul>{ing}</ul>
              )
            })}
            </div>
            <button><a href={data.url}>Recipe</a></button>
            <div className="yield"><span>People: </span>{data.yield}</div>
          </div>
        </div>
    </div>
  );
}
