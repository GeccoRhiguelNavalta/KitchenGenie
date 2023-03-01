import React, { useState, useEffect } from "react";

export default function RecipeItem(props) {
  const [allHits, setHits] = useState([]);
  const data = props.recipes;

  function iterateProps(data) {
    const hits = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i] === "recipe") {
        hits.push(data[i]);
      }
    }
    setHits(hits);
  }
  console.log(allHits);

  useEffect(() => {
    iterateProps(data);
  }, [data]);

  return (
    <div className="RecipeItem">
      {allHits.length === 0 ? (
        <div>No recipe found</div>
      ) : (
        allHits.map((item) => {
          return (
            <div key={item}>
              photo of the recipe
              <div className="right-container">
                recipe info
                <div className="ingredients">ingredients</div>
                <div className="instructions">instructions</div>
                <div className="cookingtime">cookingtime</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
