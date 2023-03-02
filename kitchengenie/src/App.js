//import all child components and css file
import "./App.css";
import Logo from "./Components/Logo";
import MainInput from "./Components/Main/MainInput";
import RecipesHolder from "./Components/Recipes/RecipesHolder";

//get react lib
import React, { useState, useEffect } from "react";

//import context
import Context from './Context/DataContext'

//get helper functions from utility file
import { getAll } from './Utils/APIreqs';

//main component
function App() {
  // inititate state of data being used
  const [data, setData] = useState([]);

  //async function to get data from mongoDB (client's ingredients input from input form)
  async function fetchData() {
    try {
    const fetchedData = await getAll();
    setData(fetchedData);
    } catch (error) {
    console.log(error);
    }
    }
  
  //function to check if any input from client and data changes to re render DOM
  // async function checking() {
  //   return (submitted) ? fetchData() : null;
  // }
  
  //render data on first load
  useEffect(()=>{
    fetchData();
    // checking();
  },[])

  return (
    <div className="App">
      {/* render all main child components and wrapped components in Context.Provider that needs data */}
      <Logo />
      <Context.Provider value={data}>
      <MainInput />
      <RecipesHolder />
      </Context.Provider>
    </div>
  );
}

export default App;
