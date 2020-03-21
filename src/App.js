import React, { useState, useLayoutEffect } from 'react';
import Quotes from './components/quote';
import Buttons from './components/buttons';
import './App.css';

function App() {
  const [colors] = useState(["#4287f5", "#42ecf5", "#42f584", "#37d925", "#b3f538", "#d1d11f", "#fc8535", "#fc3535", "#b537f0", "#e635d1", "#8a7f83", "#303030"])
  const [quotes, setQuotes] = useState([
    {
      text: '',
      author: ''
    }
  ])
  const [color, setColor] = useState(0);
  const [quote, setQuote] = useState(0);

  const newQuote = () => {
    setColor(parseInt(Math.random() * colors.length));
    setQuote(parseInt(Math.random() * quotes.length));
    document.getElementsByTagName("html")[0].style.setProperty("--rand-color", colors[color])
  }

  useLayoutEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(responseData => {
      setQuotes([...responseData]);
      setColor(parseInt(Math.random() * colors.length));
      setQuote(parseInt(Math.random() * responseData.length));
    })
    .catch(err => console.log(err, err.data));
    document.documentElement.style.setProperty("--rand-color", colors[color]);
  }, [])

  return (
    <main>
      <Quotes text={quotes[quote].text} author={quotes[quote].author} />
      <Buttons text={quotes[quote].text} author={quotes[quote].author} newQuote={newQuote} />
    </main>
  )  
}

export default App;
