import React, {useState, useEffect} from 'react';
import Quotes from './components/quote';
import Buttons from './components/buttons';
import './App.css';

function App() {
    const [colors, setColors] = useState(["#4287f5", "#42ecf5", "#42f584", "#37d925", "#b3f538", "#d1d11f", "#fc8535", "#fc3535", "#b537f0", "#e635d1", "#8a7f83", "#303030"])
    const [quotes, setQuotes] = useState([
      {
        text: 'You can observe a lot just by watching.',
        author: 'Yogi Berra'
      },
      {
        text: 'Nothing happens unless first we dream',
        author: 'Carl Sandburg'
      },
      {
        text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
        author: 'Thomas Edison'
      }        
    ])
    const [color, setColor] = useState(0);
    const [quote, setQuote] = useState(0);

  const newQuote = () => {
    this.setState({
      color: parseInt(Math.random() * this.state.colors.length),
      quote: parseInt(Math.random() * this.state.quotes.length)
    })
    document.getElementsByTagName("html")[0].style.setProperty("--rand-color", this.state.colors[this.state.color])
  }

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(responseData => {
      setQuotes([...responseData]);
      setColor(parseInt(Math.random() * this.state.colors.length));
      setQuote(parseInt(Math.random() * responseData.length));
    })
    .catch(err => console.log(err, err.data))
    document.getElementsByTagName("html")[0].style.setProperty("--rand-color", colors[color])
  })

  return (
    <main>
      <Quotes text={quotes[quote].text} author={quotes[quote].author} />
      <Buttons text={quotes[quote].text} author={quotes[quote].author} newQuote={newQuote} />
    </main>
  )
}

export default App;
