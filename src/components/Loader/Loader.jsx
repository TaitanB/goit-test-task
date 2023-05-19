import picture from "../../assets/picture.png";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <img src={picture} alt="Loading..." className={css.loader} />
    </div>
  );
};

export default Loader;
