import "./styles.css";

import React, { useState } from "react";
import { FaTwitter, FaTumblr } from "react-icons/fa";
const quotes = [
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    text:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein"
  },
  {
    text:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson"
  }
];

function App() {
  const [selectedQuote, setSelectedQuote] = useState(quotes[0]);
  const [backgroundColor, setBackgroundColor] = useState("#f2f2f2");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedQuote(quotes[randomIndex]);
    setBackgroundColor(getRandomColor());
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div id="container" style={{ backgroundColor }}>
      <div id="quote-box">
        <p id="text">{selectedQuote.text}</p>
        <p id="author">- {selectedQuote.author}</p>
        <div className="icons">
          <div className="el">
            <a href="https://twitter.com/login" target="_blank">
              <FaTwitter className="icon" style={{ backgroundColor }} />{" "}
            </a>
            <a href="https://tumblr.com/login" target="_blank">
              {" "}
              <FaTumblr className="icon" style={{ backgroundColor }} />{" "}
            </a>
          </div>
          <button
            id="new-quote"
            onClick={handleClick}
            style={{ backgroundColor }}
          >
            New Quote
          </button>
        </div>
      </div>
      <span>By Sudhanshu</span>
    </div>
  );
}

export default App;
