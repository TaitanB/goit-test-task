import logo from "../../assets/logo.png";
import picture from "../../assets/picture.png";
import hansel from "../../assets/hansel.png";
import css from "./Home.module.css";
import cssC from "../../components/UserCard/UserCard.module.css";

export default function Home() {
  return (
    <div className={css.homeContainer}>
      <div>
        <h1 className={css.title}>Following Net</h1>
        <img src={picture} alt="picture" className={cssC.picture} />
      </div>

      <div className={cssC.userCard} style={{ transform: "rotate(10deg)" }}>
        <div className={cssC.imgContainer}>
          <img src={`${logo}`} alt="logo" className={cssC.logo} />
          <img src={`${picture}`} alt="picture" className={cssC.picture} />
          <div className={cssC.userAvatarContainer}>
            <img
              className={cssC.userAvatar}
              src={hansel}
              alt="user photo"
              style={{
                backgroundColor: "#5736A3",
              }}
            />
          </div>
        </div>
        <div className={cssC.userInfo}>
          <p className={cssC.userTweets}>99 tweets</p>
          <p className={cssC.userFollowers}>
            {"999999".toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            Followers
          </p>
          <button type="button" className={cssC.userToggleFollow}>
            follow
          </button>
        </div>
      </div>
    </div>
  );
}
