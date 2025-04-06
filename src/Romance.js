import { FaHeart, FaImage } from "react-icons/fa";
import one from "./images/1.jpg";
import two from "./images/2.jpg";
import three from "./images/3.jpg";
import four from "./images/4.png";
import five from "./images/5.png";
import six from "./images/6.jpeg";
import seven from "./images/7.png";
import eight from "./images/8.jpg";
import nine from "./images/9.jpg";
import "./Romance.css";

const rizalRomance = {
  relationships: [
    {
      id: 1,
      name: "Segunda Katigbak",
      type: "First Love",
      years: "1877 (Age 16)",
      location: "La Concordia College, Manila",
      description:
        "Rizal's first love, a Batangueña already engaged to another man when they met through his sister Olympia.",
      keyMoments: [
        "Met through Rizal's friend Mariano Katigbak (Segunda's brother)",
        "Weekly visits to La Concordia College",
        "Relationship ended due to Segunda's existing engagement",
      ],
      quotes: [
        "Ended, at an early hour, my first love! My virgin heart will always mourn the reckless step it took on the flower-decked abyss.",
      ],
      image: one,
      certainty: "documented",
    },
    {
      id: 2,
      name: "Leonor Valenzuela",
      type: "Neighbor Romance",
      years: "1879-1882 (Age 18-21)",
      location: "Intramuros, Manila",
      description:
        "The 'girl-next-door' during Rizal's UST days, courted with invisible ink letters (salt-water solution).",
      keyMoments: [
        "Met at Doña Concha Leyva's boarding house",
        "Secret letters read by heating over candlelight",
        "Relationship ended when Rizal left for Spain",
      ],
      image: two,
      certainty: "documented",
    },
    {
      id: 3,
      name: "Leonor Rivera",
      type: "Great Love",
      years: "1879-1890 (Age 18-29)",
      location: "Manila ↔ Europe",
      description:
        "Rizal's second cousin and true love, engaged for 11 years through letters (codenamed 'Taimis').",
      keyMoments: [
        "Met at Rizal's uncle's boarding house (1879)",
        "Forced marriage to Henry Kipping (1890)",
        "Died in childbirth (1893), possibly inspiring Maria Clara",
      ],
      quotes: [
        "Your letters are my only consolation in exile",
        "She kept the ashes of my letters in her wedding gown hem",
      ],
      image: three,
      certainty: "documented",
    },
    {
      id: 4,
      name: "Consuelo Ortiga y Rey",
      type: "Madrid Romance",
      years: "1882 (Age 21)",
      location: "Madrid, Spain",
      description:
        "Daughter of Manila's former mayor, subject of Rizal's poem but relationship ended for his friend Eduardo de Lete.",
      keyMoments: [
        "Met at Filipino student gatherings",
        "Poem 'A La Señorita C.O.y.P.' dedicated to her",
        "Considered a 'rebound' from Leonor Rivera",
      ],
      image: four,
      certainty: "documented",
    },
    {
      id: 5,
      name: "O-Sei-San (Seiko Usui)",
      type: "Japanese Love",
      years: "1888 (Age 27)",
      location: "Tokyo, Japan",
      description:
        "Samurai's daughter who taught Rizal Japanese art and culture during his 45-day stay, nearly made him postpone Europe return.",
      keyMoments: [
        "Met through a gardener at Spanish Legation",
        "Cultural exchanges in museums/universities",
        "Final goodbye at Yokohama port",
      ],
      quotes: ["O-Sei-San, sayonara! I will always remember you"],
      image: five,
      certainty: "documented",
    },
    {
      id: 6,
      name: "Gertrude Beckett",
      type: "London Friendship",
      years: "1888-1889 (Age 27-28)",
      location: "London, England",
      description:
        "Landlord's daughter who fell for Rizal unrequitedly, assisted with his sculptures like 'The Triumph of Death over Life'.",
      keyMoments: [
        "Nicknamed 'Gettie' (he was 'Pettie')",
        "Left London partly to distance himself",
        "Gave her a composite carving of Beckett sisters",
      ],
      image: six,
      certainty: "unrequited",
    },
    {
      id: 7,
      name: "Suzanne Jacoby",
      type: "Belgian Fling",
      years: "1890 (Age 29)",
      location: "Brussels, Belgium",
      description:
        "Niece of Rizal's landlady who developed feelings during his stay while writing El Fili, but received minimal reciprocation.",
      keyMoments: [
        "Wrote unanswered letters to Rizal",
        "Brief reconnection in 1891",
        "Ultimately forgotten as Rizal focused on revolution",
      ],
      image: seven,
      certainty: "one-sided",
    },
    {
      id: 8,
      name: "Nellie Boustead",
      type: "Almost-Marriage",
      years: "1891 (Age 30)",
      location: "Biarritz, France",
      description:
        "Wealthy, athletic friend who nearly married Rizal post-Leonor Rivera, but split over religious differences (Protestant conversion).",
      keyMoments: [
        "Almost caused duel with Antonio Luna",
        "Family opposed due to Rizal's finances",
        "Remained friends after breakup",
      ],
      quotes: [
        "May the Lord look down on you with favor... my remembrance will accompany you",
      ],
      image: eight,
      certainty: "documented",
    },
    {
      id: 9,
      name: "Josephine Bracken",
      type: "Final Partner",
      years: "1895-1896 (Age 34-35)",
      location: "Dapitan, Philippines",
      description:
        "Irish woman who joined Rizal in exile, had a stillborn son (Francisco), and witnessed his execution - possibly secretly married.",
      keyMoments: [
        "Met as caregiver for blind adoptive father",
        "Denied church wedding due to political reasons",
        "Present at Rizal's execution in Bagumbayan",
      ],
      quotes: ["In Dapitan, we found paradise amidst persecution"],
      image: nine,
      certainty: "documented",
    },
  ],
  historicalNotes:
    "Rizal's relationships progressed from youthful infatuation to mature companionship, each influencing his writings. While 5 were confirmed romantic (Segunda, both Leonors, O-Sei-San, Josephine), others show his complex personality. Leonor Rivera is said to be his true soulmate.",
};

const Romance = () => {
  return (
    <div className="romance-container">
      <header className="romance-header">
        <p className="romance-title">Romantic Relationships</p>
        <p className="romance-subtitle">
          The women who influenced the national hero's heart and mind
        </p>
      </header>

      <div className="romance-cards">
        {rizalRomance.relationships.map((romance) => (
          <article key={romance.id} className="romance-card">
            <div className="romance-image-container">
              {romance.image ? (
                <img
                  src={romance.image}
                  alt={romance.name}
                  className="romance-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.querySelector(
                      ".image-fallback"
                    ).style.display = "flex";
                  }}
                />
              ) : null}
              <div className="image-fallback">
                <FaImage className="fallback-icon" />
              </div>
            </div>

            <div className="romance-content">
              <div className="romance-meta">
                <h2>{romance.name}</h2>
                <span className="romance-type">
                  <FaHeart className="heart-icon" /> {romance.type}
                </span>
              </div>

              <p className="romance-years-location">
                {romance.years} • {romance.location}
              </p>

              <p className="romance-description">{romance.description}</p>

              {romance.keyMoments && (
                <div className="romance-section">
                  <h3>Key Moments</h3>
                  <ul>
                    {romance.keyMoments.map((moment, index) => (
                      <li key={index}>{moment}</li>
                    ))}
                  </ul>
                </div>
              )}

              {romance.quotes && (
                <div className="romance-section">
                  <h3>Quotes</h3>
                  {romance.quotes.map((quote, index) => (
                    <blockquote key={index}>"{quote}"</blockquote>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="romance-notes">
        <p>{rizalRomance.historicalNotes}</p>
      </div>
    </div>
  );
};

export default Romance;
