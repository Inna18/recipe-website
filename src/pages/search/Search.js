import {useLocation} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import RecipeList from "../../components/recipeList/RecipeList";

export default function Search() {

  const queryObj = useLocation().search;
  const queryString = new URLSearchParams(queryObj);
  const query = queryString.get("q");

  const { data, isPending, error } = useFetch("http://localhost:3000/recipes?q=" + query)

  return (
    <div>
      <h2 className="page-title">Results including: "<em>{query}</em>"</h2>

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
