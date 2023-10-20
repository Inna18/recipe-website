import {useFetch} from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import "./Recipe.css"

export default function Recipe() {
  const { id } = useParams();
  const {data:recipe, isPending, error} = useFetch(`http://localhost:3000/recipes/${id}`)

  return (
    <div className="recipe">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipe && (
        <>
          <h3 className="page-title">{recipe.title}</h3>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}
