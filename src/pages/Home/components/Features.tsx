import { Link } from "react-router-dom";
import COOKING from "../../../assets/cooking.svg";
import LIST from "../../../assets/list.svg";
import SEARCH from "../../../assets/search.svg";

const style = { width: "40%", marginBottom: "20vh" };

export const Features = () => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>Przeglądaj przepisy!</h4>
      <img style={style} src={LIST} alt="" />
      <h4>Wyszukaj idealny przepis!</h4>
      <img style={style} src={SEARCH} alt="" />
      <h4>Przyrządź zgodnie z dokładnym opisem!</h4>
      <img style={style} src={COOKING} alt="" />
      <Link role="button" to="/recipes">
        Zaczynam
      </Link>
    </article>
  );
};
