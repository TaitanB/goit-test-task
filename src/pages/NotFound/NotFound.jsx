import { Link } from "react-router-dom";

import picture from "../../assets/picture.png";
import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={css.textContainer}>
      <p className={css.text}>
        There is nothing here... Go to{" "}
        <Link to="/" className={css.link}>
          Home!
        </Link>
      </p>
      <img src={picture} alt="picture" className={css.picture} />
    </div>
  );
}
