import { useNavigate } from "react-router-dom";
import "./Home.css";
import rizal from "./images/rizal.jpg";
import clock from "./images/clock.png";
import mystery from "./images/mystery.jpg";
import { FaHeart } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <div className="col">
          <img src={clock} className="clockBg" alt="Clock Background" />
          <img src={rizal} className="rizalPic" alt="Rizal Pic" />
          <div className="rizalText">
            <p className="name">Dr. Jose Rizal</p>
            <p className="deets">
              A National Hero educated across three continents, Rizal
              synthesized Western medicine, European philosophy, and Asian
              perspectives. His formal training in ophthalmology, combined with
              self-study in ethnology and linguistics, created the unique
              intellectual framework for his reformist writings and
              nation-building vision.
            </p>
            <button
              type="button"
              className="educationButton"
              onClick={() => navigate("/education")} // Navigates to Education page
            >
              View Education <FaGraduationCap style={{ marginLeft: "6px" }} />
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="home-bg">
        <div className="romance-home">
          <p className="romance-title">Who was his lover?</p>
          <img src={mystery} className="mysteryPic" alt="Mystery Pic" />
          <p className="romance-deets">
            They knew him as a lover, a poet, a dreamer—but never fully. Each
            woman glimpsed a piece of his heart, yet he remained a riddle
            wrapped in exile and revolution. To love Jose Rizal was to chase a
            ghost already claimed by destiny.
          </p>
          <button
            type="button"
            className="romanceButton"
            onClick={() => navigate("/romance")}
          >
            View Romance <FaHeart style={{ marginLeft: "6px" }} />
          </button>{" "}
        </div>
      </div>
    </>
  );
};
export default Home;
