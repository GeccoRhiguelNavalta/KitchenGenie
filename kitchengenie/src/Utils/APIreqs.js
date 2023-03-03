//utility file for fetch requests from client to server

//root server url
const rootURL = "http://localhost:3001";

//helper function to get all ingredients
async function getAll() {
  let retrievedData = [];
  await fetch(`${rootURL}/list`)
    .then((response) => response.json())
    .then((fetchedData) => (retrievedData = fetchedData));
  return retrievedData;
}

//helper function to post a new ingredient
async function postMany(ingredients) {
  const response = await fetch(`${rootURL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ingredients),
  });
  return response.json();
}

//helper function to delete an ingredient
async function deleteOne(id) {
  const response = await fetch(`${rootURL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

//helper function to get recipes from database that has clients ingredients
async function getRecipe() {
  let retrievedRecipe = [];
  await fetch(`${rootURL}/recipe`)
    .then((response) => response.json())
    .then((fetchedRecipe) => (retrievedRecipe = fetchedRecipe));
  return retrievedRecipe;
}

//export all functions for components to use all throughout the app
export { getAll, postMany, deleteOne, getRecipe };
