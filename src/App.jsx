import { useState } from "react";
import resipi from "./resipi";
import "./app.css";

const App = () => {
  const [recipe, setRecipe] = useState(resipi);
  const [search, setSearch] = useState("");
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>resepi dapoq pdot</h1>
        <input
          type="text"
          placeholder="cari resepi.."
          onChange={inputHandler}
        />
      </div>
      <section className="recipelist">
        {recipe
          .filter((recipe) => {
            if (search === "") {
              return recipe;
            } else if (
              recipe.resipi
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return recipe;
            }
          })
          .map((recipe) => {
            const { id, resipi, link, img } = recipe;
            return (
              <article key={id} className="recipe">
                <a href={link}>
                  <h3>{resipi}</h3>
                </a>
                {/* <a href={link}>
                  <img src={img} alt="gambar makanan" />
                </a> */}
              </article>
            );
          })}
      </section>
    </>
  );
};
export default App;
