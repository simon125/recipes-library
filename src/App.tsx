import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/layout/Navigation";
import { Home } from "./pages/Home/Home";
import { Recipes } from "./pages/Recipes/Recipes";
import { RecipeDetails } from "./pages/RecipeDetails/RecipeDetails";
import { About } from "./pages/About/About";

export const App: FC = () => {
  return (
    <>
      <Navigation />
      <main className="container" style={{ marginTop: "10vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
};
