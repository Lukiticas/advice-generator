import { useState, useEffect } from "react";
import Advice from "./components/Advice";
import "./styles/App.css";

function App() {
  const [message, setMessage] = useState({
    id: 1,
    advice: "No advice here, roll the dice!",
  });
  const [isLocked, setIsLocked] = useState(false);

  const requestAdvice = () => {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((data) => data.json())
      .then((json) => {
        const {
          slip: { id, advice },
        } = json;
        setMessage({ id, advice });
      })
      .catch((err) => {
        console.error(err);
        setMessage({
          id: "error",
          advice: "this isn't a advice, some error occurred",
        });
      });
  };

  const changeAdvice = () => {
    if (isLocked) {
      return;
    } else {
      setIsLocked(true);
      setTimeout(() => {
        setIsLocked(false);
      }, 2000);
    }
    requestAdvice();
  };

  return (
    <div className="app">
      <main>
        <Advice
          id={message.id}
          message={message.advice}
          changeAdvice={changeAdvice}
          isLocked={isLocked}
        />
      </main>
      <footer className="attribution">
        Challenge by
        <a
          rel="noopener"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a rel="noopener" href="https://github.com/Lukiticas" target="_blank">
          Lucas Matheus
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
