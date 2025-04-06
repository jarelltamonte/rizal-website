import "./Education.css";
import { useNavigate } from "react-router-dom";

const rizalEducation = {
  student: {
    name: "Jose Protacio Rizal Mercado y Alonso Realonda",
    birthDate: "June 19, 1861",
    birthPlace: "Calamba, Laguna, Philippines",
  },
  schools: [
    {
      id: 0,
      name: "Biñan Elementary School",
      location: "Biñan, Laguna, Philippines",
      yearsAttended: "1869-1871",
      level: "Primary",
      experienceRating: "Excellent",
      description:
        "Rizal began his formal education in Biñan under the tutelage of Maestro Justiniano Aquino Cruz. He excelled in his studies and showed early intellectual promise.",
      achievements: [
        "Mastered the basics of Spanish and Latin",
        "Demonstrated exceptional memorization skills",
        "Showed early talent in sketching and painting",
      ],
      notableIndividuals: [
        "Maestro Justiniano Aquino Cruz (his first formal teacher)",
        "His uncle Manuel Alberto (who encouraged his education)",
      ],
    },
    {
      id: 1,
      name: "Ateneo Municipal de Manila",
      location: "Manila, Philippines",
      yearsAttended: "1872-1877",
      level: "Secondary",
      experienceRating: "Excellent",
      description:
        "Rizal excelled at Ateneo, consistently earning top honors. He developed his skills in poetry, art, and rhetoric here. Notable figures include Father Francisco de Paula Sanchez, who inspired his love for literature and encouraged his writing talents.",
      achievements: [
        "Graduated with highest honors (Sobresaliente)",
        "Received the title of 'Emperor' for being the best student in class",
        "Wrote his first poem 'Mi Primera Inspiracion' (My First Inspiration) here",
      ],
    },
    {
      id: 2,
      name: "University of Santo Tomas",
      location: "Manila, Philippines",
      yearsAttended: "1877-1882",
      level: "University",
      course: "Philosophy and Letters (later shifted to Medicine)",
      experienceRating: "Mediocre",
      description:
        "Rizal was dissatisfied with the Dominican professors' method of instruction and the racial discrimination against Filipino students. He faced hostility from some Spanish professors. However, he continued to excel academically while becoming more aware of social injustices.",
      notableIndividuals: [
        "Father Pablo Ramon (Rector who advised him to pursue studies abroad)",
        "Fellow Filipino students who shared his nationalist sentiments",
      ],
    },
    {
      id: 3,
      name: "Universidad Central de Madrid",
      location: "Madrid, Spain",
      yearsAttended: "1882-1885",
      level: "University",
      course: "Medicine and Philosophy and Letters",
      experienceRating: "Excellent",
      description:
        "Rizal thrived in the liberal environment of Madrid. He earned degrees in both medicine and philosophy. Here he met other reformists and developed his political ideas. He became involved with the Propaganda Movement during this time.",
      notableIndividuals: [
        "Miguel Morayta (history professor who influenced his nationalist views)",
        "Marcelo H. del Pilar (fellow reformist)",
        "Graciano Lopez Jaena (fellow reformist and writer)",
      ],
      achievements: [
        "Licentiate in Medicine (1884)",
        "Licentiate in Philosophy and Letters (1885)",
      ],
    },
    {
      id: 4,
      name: "University of Paris",
      location: "Paris, France",
      yearsAttended: "1885-1886",
      level: "University (Apprentice)",
      course: "Ophthalmology (specialization)",
      experienceRating: "Satisfactory",
      description:
        "Rizal worked as an assistant to Dr. Louis de Weckert, a leading French ophthalmologist. While he valued the medical training, he spent more time studying European society and writing his novels than formal medical studies.",
      notableIndividuals: [
        "Dr. Louis de Weckert (his mentor in ophthalmology)",
        "Juan Luna and Felix Resurreccion Hidalgo (fellow Filipino artists in Paris)",
      ],
    },
    {
      id: 5,
      name: "University of Heidelberg",
      location: "Heidelberg, Germany",
      yearsAttended: "1886",
      level: "University",
      course: "Ophthalmology (further studies)",
      experienceRating: "Excellent",
      description:
        "Rizal was deeply impressed by German scholarship and culture. He worked at the University Eye Hospital under Dr. Otto Becker. During this period, he completed his eye specialization and wrote parts of Noli Me Tangere.",
      notableIndividuals: [
        "Dr. Otto Becker (his professor in ophthalmology)",
        "Professor Ferdinand Blumentritt (became his close friend and correspondent)",
      ],
      achievements: [
        "Published his classic poem 'A Las Flores de Heidelberg'",
        "Completed specialization in ophthalmology",
      ],
    },
  ],
  additionalNotes:
    "Rizal's educational journey across the Philippines, Spain, France, and Germany not only gave him academic credentials but more importantly exposed him to progressive ideas that shaped his nationalist views. His experiences with both excellent and mediocre educational systems influenced his later advocacy for educational reform in the Philippines.",
};

const Education = () => {
  return (
    <div className="education-container">
      <p className="education-title">Education</p>
      <p className="education-subtitle">
        The academic journey of Philippines' national hero
      </p>

      <div className="education-cards">
        {rizalEducation.schools.map((school) => (
          <div key={school.id} className="education-card">
            <h2>{school.name}</h2>
            <p className="years-rating">
              {school.yearsAttended} • {school.experienceRating}
            </p>

            <div className="education-details">
              <p>
                <strong className="location">Location:</strong>{" "}
                {school.location}
              </p>

              <p className="description">{school.description}</p>

              {school.notableIndividuals && (
                <div className="notable-section">
                  <h3>Notable Figures:</h3>
                  <ul>
                    {school.notableIndividuals.map((person, index) => (
                      <li key={index}>{person}</li>
                    ))}
                  </ul>
                </div>
              )}

              {school.achievements && (
                <div className="achievements-section">
                  <h3>Key Achievements:</h3>
                  <ul>
                    {school.achievements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="education-category">{school.level}</div>
          </div>
        ))}
      </div>
      <p className="addnotes">{rizalEducation.additionalNotes}</p>
      <div className="tutors-list">
        <p className="tutors">Notable Tutors:</p>
          <p className="tt"><span className="tutorName">Maestro Celestino</span> - Basic alphabet and prayers (age 3-4)</p>
          <p className="tt"><span className="tutorName">Maestro Lucas Padua</span> - Fundamental reading/writing</p>
          <p className="tt"><span className="tutorName">Leon Monroy</span> - Advanced Spanish and Latin (father's classmate)</p>
          <p className="tt"><span className="tutorName">Maestro Justiniano</span> - Rigorous mathematics and Latin in Biñan</p>
          <p className="tt"><span className="tutorName">Teodora Alonso (Mother)</span> - Poetry and storytelling</p>
          <p className="tt"><span className="tutorName">Old Juancho</span> - Free art lessons (sketching/painting)</p>
      </div>
      
    </div>
  );
};

export default Education;
