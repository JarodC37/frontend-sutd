import React, { lazy, useState, Suspense } from "react";
import ReactDOM from "react-dom";
import { ReactQueryConfigProvider } from "react-query";

const Recipes = lazy(() => import("./components/Recipes"));
const Recipe = lazy(() => import("./components/Recipe"));

const queryConfig = {
  suspense: true,
};

function App() {
  const [activeRecipe, setActiveRecipe] = useState(null);
  return (
    <>
      <h1>React Query Recipes</h1>
      <ReactQueryConfigProvider config={queryConfig}>
        <Suspense fallback={<h2>Loading....</h2>}>
          {activeRecipe ? (
            <Recipe
              activeRecipe={activeRecipe}
              setActiveRecipe={setActiveRecipe}
            />
          ) : (
            <Recipes setActiveRecipe={setActiveRecipe} />
          )}
        </Suspense>
      </ReactQueryConfigProvider>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
