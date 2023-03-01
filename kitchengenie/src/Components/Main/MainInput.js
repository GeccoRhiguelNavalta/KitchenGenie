//importing child components to render on page
import InputForm from "./InputForm";
import IngredientsList from "./IngredientsList";

//creating and exporting MainInput function component, essentially
//just a container
export default function MainInput() {
  return (
    <div className="MainInput">
      <InputForm />
      <IngredientsList />
    </div>
  );
}
