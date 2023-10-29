import React from 'react'
import {Link} from "react-router-dom";
import "./RecipeList.css";
import {useTheme} from "../../hooks/useTheme";
import deleteIcon from "../../assets/delete_icon.svg";
import {projectFirestore} from "../../firebase/config";

export default function RecipeList({ recipes }) {

  const { mode } = useTheme();

  const handleDelete = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  }

  if (recipes.length <= 0) {
    return (
      <div className="error" >No recipes found...</div>
    )
  }
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}</div>
          <Link to={`/recipes/${recipe.id}`}>Cook Now</Link>
          <img src={deleteIcon}
               className="delete-icon"
               alt="delete-icon"
               style={{filter: mode === 'dark'?'invert(100%)':'invert(0%)'}}
               onClick={() => handleDelete(recipe.id)} />
        </div>
      ))}
    </div>
  )
}
