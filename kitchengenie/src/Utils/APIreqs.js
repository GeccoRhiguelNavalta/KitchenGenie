const rootURL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : "http://localhost:3001";

async function getAll() {
  let retrievedData = [];
  try {
    await fetch(`${rootURL}/list`)
      .then((response) => response.json())
      .then((fetchedData) => (retrievedData = fetchedData));
    return retrievedData;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function postMany(ingredients) {
  try {
    const response = await fetch(`${rootURL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredients),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function deleteOne(id) {
  try {
    const response = await fetch(`${rootURL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getRecipe() {
  try {
    let retrievedRecipe = [];
    await fetch(`${rootURL}/recipe`)
      .then((response) => response.json())
      .then((fetchedRecipe) => (retrievedRecipe = fetchedRecipe));
    return retrievedRecipe;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getAll, postMany, deleteOne, getRecipe };
