import React from "react";
import './App.css'
const quoteData = [
  { text: `“The purpose of our lives is to be happy.”`, author: "Dalai Lama" },
  {
    text: `“Life is what happens when you’re busy making other plans.”`,
    author: "John Lennon"
  },
  { text: `“Get busy living or get busy dying.”`, author: "Stephen King" },
  {
    text: `“You only live once, but if you do it right, once is enough.”`,
    author: "Mae West"
  }
];
const QuoteBox = ({ quote, handleNewQuote }) => {
  return (
    <div id="quote-box">
      <h2 id="text">{quote.text}</h2>
      <p id="author">-{quote.author}</p>
      <div className="actions">
        <a id="tweet-quote" href="twitter.com/intent/tweet">
    <i className="fab fa-twitter-square fa-2x"></i> 
  </a>
        
        <i className="fab fa-tumblr-square fa-2x custom-icon"></i>
        <button id="new-quote" className="button" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const getRandomIndex = (max) =>
  Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);
 const App = () => {
  const [backgroundColor, setBackgroundColor] = React.useState(
    getRandomColor()
  );

  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
    handleNewColor();
  };
  const handleNewColor = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
    document.documentElement.style.setProperty("--button-color", newColor);
  };

  const style = {
    backgroundColor: backgroundColor,
    color: backgroundColor
  };
  return (
    <div className="main" style={style}>
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
};
export default App;