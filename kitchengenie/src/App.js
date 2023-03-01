//import all child components and css file
import "./App.css";
import Logo from "./Components/Logo";
import MainInput from "./Components/Main/MainInput";
import RecipesHolder from "./Components/Recipes/RecipesHolder";

//main component
function App() {
  return (
    <div className="App">
      {/* render all main child components */}
      <Logo />
      <MainInput />
      <RecipesHolder />
    </div>
  );
}

export default App;
