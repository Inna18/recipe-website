import {useParams} from "react-router-dom";
import "./Recipe.css"
import {useEffect, useState} from "react";
import {projectFirestore} from "../../firebase/config";
import {useTheme} from "../../hooks/useTheme";

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const [updatedTitle, setUpdatedTitle] = useState(null);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot(doc => {
      if (doc.exists) {
        setData(doc.data());
        setIsPending(false);
      } else {
        setError("No recipe found...");
        setIsPending(false);
      }
    }, (err) => {
      setError(err.message());
      setIsPending(false);
    });

    return () => unsub();

  }, [id]);

  const changeTitle = (updatedTitle) => { setUpdatedTitle(updatedTitle); }

  const handleUpdate = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: updatedTitle
    })
  }

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {data && (
        <>
          <h3 className="page-title">{data.title}</h3>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{data.method}</p>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <input style={{ width: "300px", marginRight: "10px" }} type="text" onChange={(e) => changeTitle(e.target.value)}/>
            <a className="update-btn" onClick={() => handleUpdate()}>Update Title</a>
          </div>
        </>
      )}
    </div>
  )
}
