import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <article>
      <h1>Recipes library</h1>
      <h3>
        Aplikacja która pozwoli Ci przeglądać i przechowywać Twoje ulubione
        przepisy
      </h3>
      <Link role="button" to="/recipes">
        Zaczynam już teraz
      </Link>
    </article>
  );
};
