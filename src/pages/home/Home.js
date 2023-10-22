import {useFetch} from "../../hooks/useFetch";
import "./Home.css"
import RecipeList from "../../component/recipeList/RecipeList";

export default function Home() {
  const {data:recipes, isPending, error} = useFetch("http://localhost:3000/recipes");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipes && <RecipeList recipes={recipes}/>}
    </div>
  )
}
