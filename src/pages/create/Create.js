import {useRef, useState} from "react";
import "./Create.css"
import {useHistory} from "react-router-dom";
import {projectFirestore} from "../../firebase/config";

export default function Create() {

  const history = useHistory();

  const [title, setTitle] = useState("");
  const [method, setMethod]  = useState("");
  const [cookingTime, setCookingTime]  = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const ingredientRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {title, ingredients: ingredientList, method, cookingTime: cookingTime + " mins"};
    try {
      projectFirestore.collection('recipes').add(data).then(() => {
        history.push("/");
      });
    } catch (e) {
      console.log(e.message());
    }
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if (newIngredient && !ingredientList.includes(newIngredient)) {
      setIngredientList(prevState => {
        return [...prevState, newIngredient];
      });
    }
    setNewIngredient("");
    ingredientRef.current.focus();
  }

  return (
    <div className="create">
      <h2 className="page-title">Create a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title: </span>
          <input type="text"
                 onChange={e => setTitle(e.target.value)}
                 value={title}
                 required />
        </label>
        <label>
          <span>Ingredients: </span>
          <input type="text"
                 onChange={e => setNewIngredient(e.target.value)}
                 value={newIngredient}
                 ref={ingredientRef} />
          <div  className="ingredients">
            {ingredientList.map(ing => (
              <span key={ing}><em>{ing},&nbsp;</em></span>
            ))}
          </div>
          <button className="btn" onClick={handleAdd}>Add</button>
        </label>
        <label>
          <span>Recipe Method: </span>
          <textarea onChange={e => setMethod(e.target.value)}
                    value={method}
                    required />
        </label>
        <label>
          <span>Cooking time (in minutes): :</span>
          <input type="number"
                 onChange={e => setCookingTime(e.target.value)}
                 value={cookingTime}
                 required />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}
