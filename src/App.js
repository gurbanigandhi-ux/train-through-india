import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";
import cities from "./data/cities.json";
import quizzes from "./data/quizzes.json";

function Home({ totalScore, visited }) {
  return (
    <div className="page">
      <h1>Train Through India</h1>
      <p>Explore Indian cities through a virtual train journey and fun quizzes.</p>
      <p>Cities visited: {visited.length} | Total score: {totalScore}</p>
      <Link to="/cities" className="btn">
        Start Journey
      </Link>
    </div>
  );
}

function CityList() {
  return (
    <div className="page">
      <h2>Select a City</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={`/city/${city.id}`}>
              {city.name} – {city.tagline}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
}

function CityDetail() {
  const { id } = useParams();
  const city = cities.find((c) => c.id === id);
  const navigate = useNavigate();

  if (!city) return <div>City not found</div>;

  return (
    <div className="page">
      <h2>{city.name}</h2>
      <p>{city.description}</p>

      <h3>Food</h3>
      <ul>{city.food.map((item) => <li key={item}>{item}</li>)}</ul>

      <h3>Festivals</h3>
      <ul>{city.festivals.map((item) => <li key={item}>{item}</li>)}</ul>

      <h3>Monuments</h3>
      <ul>{city.monuments.map((item) => <li key={item}>{item}</li>)}</ul>

      <h3>Art & Crafts</h3>
      <ul>{city.art.map((item) => <li key={item}>{item}</li>)}</ul>

      <h3>Facts</h3>
      <ul>{city.facts.map((item) => <li key={item}>{item}</li>)}</ul>

      <button className="btn" onClick={() => navigate(`/quiz/${city.id}`)}>
        Take Quiz
      </button>
      <br />
      <Link to="/cities" className="btn">
        Back to Cities
      </Link>
    </div>
  );
}

function Quiz({ addScore, markVisited }) {
  const { cityId } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes.find((q) => q.cityId === cityId);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!quiz) return <div>No quiz for this city.</div>;

  const question = quiz.questions[current];

  const handleNext = () => {
    if (selected === null) return;
    if (selected === question.correctIndex) {
      setScore((prev) => prev + 1);
    }
    if (current + 1 < quiz.questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      const finalScore =
        selected === question.correctIndex ? score + 1 : score;
      setFinished(true);
      addScore(finalScore);
      markVisited(cityId);
    }
  };

  return (
    <div className="page">
      <h2>Quiz – {cityId.toUpperCase()}</h2>

      {!finished ? (
        <>
          <p>{question.question}</p>
          <ul>
            {question.options.map((opt, index) => (
              <li key={opt}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    checked={selected === index}
                    onChange={() => setSelected(index)}
                  />{" "}
                  {opt}
                </label>
              </li>
            ))}
          </ul>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </>
      ) : (
        <>
          <p>
            You scored {score} / {quiz.questions.length}
          </p>
          <button className="btn" onClick={() => navigate("/cities")}>
            Back to Cities
          </button>
        </>
      )}
    </div>
  );
}
function TrainBar({ visitedCount, totalCities }) {
  const percentage = totalCities === 0 ? 0 : (visitedCount / totalCities) * 100;
  const offset = `calc(${percentage}% - 50px)`; // 50px ≈ half train width

  return (
    <div className="train-track">
      <div
        className="train-icon"
        style={{ "--train-x": offset }}
      ></div>
      <div style={{ marginLeft: "12px", color: "white", fontWeight: "bold" }}>
        Journey progress: {visitedCount}/{totalCities} cities
      </div>
    </div>
  );
}


function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [visited, setVisited] = useState([]);

  const addScore = (delta) => {
    setTotalScore((prev) => prev + delta);
  };

  const markVisited = (cityId) => {
    setVisited((prev) => (prev.includes(cityId) ? prev : [...prev, cityId]));
  };

return (
  <Router>
    <div style={{ paddingBottom: "70px" }}>
      <div className="trainwindow">
        <Routes>
          <Route
            path="/"
            element={<Home totalScore={totalScore} visited={visited} />}
          />
          <Route path="/cities" element={<CityList />} />
          <Route path="/city/:id" element={<CityDetail />} />
          <Route
            path="/quiz/:cityId"
            element={<Quiz addScore={addScore} markVisited={markVisited} />}
          />
        </Routes>
      </div>
      <TrainBar visitedCount={visited.length} totalCities={cities.length} />
    </div>
  </Router>
);


}

export default App;
