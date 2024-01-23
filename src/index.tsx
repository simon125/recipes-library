import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecipesSearchContextProvider } from "./contexts/RecipesSearchContext";

import "@picocss/pico";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipesSearchContextProvider>
        <App />
      </RecipesSearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
