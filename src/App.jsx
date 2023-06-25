import { useState } from "react";
import resipi from "./resipi";
import "./app.css";

const App = () => {
  const [recipe, setRecipe] = useState(resipi);
  return (
    <>
      <h1>resepi dapoq pdot</h1>
      <section className="recipelist">
        {recipe.map((recipe) => {
          const { id, resipi, link, img } = recipe;
          return (
            <article key={id} className="recipe">
              <h3>{resipi}</h3>
              <a href={link}>
                <img src={img} alt="gambar makanan" />
              </a>
            </article>
          );
        })}
      </section>
    </>
  );
};
export default App;
