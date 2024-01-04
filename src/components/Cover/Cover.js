import "./styles.scss";
import meal from "../../assets/meal.png";
import cook from "../../assets/cook.png";

const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-container">
        <div className="cover__content">
          <div className="cover__content-text">
            <h1>Would you like to cook like a chef</h1>
            <p> Cook dishes from all over the world with us</p>
          </div>
          <div className="cook-img">
            {" "}
            <img src={cook} alt=" koala cook with flags" />
          </div>
        </div>

        <div className="cover__img">
          <div className="vapour">
            <span style={{ "--v": 5 }}></span>
            <span style={{ "--v": 9 }}></span>
            <span style={{ "--v": 1 }}></span>

            <span style={{ "--v": 3 }}></span>

            <span style={{ "--v": 12 }}></span>
            <span style={{ "--v": 6 }}></span>
            <span style={{ "--v": 7 }}></span>
            <span style={{ "--v": 10 }}></span>
            <span style={{ "--v": 2 }}></span>
            <span style={{ "--v": 8 }}></span>
            <span style={{ "--v": 4 }}></span>

            <span style={{ "--v": 11 }}></span>
          </div>
          <img src={meal} alt="koala cooking french fries" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
