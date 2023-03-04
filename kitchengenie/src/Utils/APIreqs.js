//utility file for fetch requests from client to server

//root server url
// const rootURL = "https://tasty-pocketbook-clam.cyclic.app:3001";

//helper function to get all ingredients
async function getAll() {
  let retrievedData = [];
  try {
    await fetch(`/list`)
    // await fetch(`${rootURL}/list`)
      .then((response) => response.json())
      .then((fetchedData) => (retrievedData = fetchedData));
    return retrievedData;
  } catch (error) {
    console.error(error)
  }
}

//helper function to post a new ingredient
async function postMany(ingredients) {
  try {
    const response = await fetch(`/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredients),
    });
    return response.json();
  } catch (error) {
    console.error(error)
  }
}

//helper function to delete an ingredient
async function deleteOne(id) {
  try {
    const response = await fetch(`/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

//helper function to get recipes from database that has clients ingredients
async function getRecipe() {
  try {
    let retrievedRecipe = [];
    await fetch(`/recipe`)
      .then((response) => response.json())
      .then((fetchedRecipe) => (retrievedRecipe = fetchedRecipe));
    return retrievedRecipe;
  } catch (error) {
    console.log(error)
  }
}

//export all functions for components to use all throughout the app
export { getAll, postMany, deleteOne, getRecipe };
