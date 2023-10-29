import "./Home.css"
import RecipeList from "../../components/recipeList/RecipeList";
import {useEffect, useState} from "react";
import {projectFirestore} from "../../firebase/config";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore.collection('recipes').onSnapshot(snapshot => {
      if (snapshot.empty) {
        setError("No recipes to load...");
        setIsPending(false);
      } else {
        const results = [];
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        });
        setData(results);
        setIsPending(false);
      }
    }, (err) => {
      setError(err.message());
      setIsPending(false);
    });

    return () => unsub();
  }, [])

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
