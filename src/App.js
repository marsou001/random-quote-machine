import React, {Component} from 'react';
import Quotes from './components/quote';
import Buttons from './components/buttons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["#4287f5", "#42ecf5", "#42f584", "#37d925", "#b3f538", "#d1d11f", "#fc8535", "#fc3535", "#b537f0", "#e635d1", "#8a7f83", "#303030"],
      quotes: [
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
      ],
      color: 0,
      quote: 0
    }
    this.newQuote = this.newQuote.bind(this)
  }

  newQuote() {
    this.setState({
      color: parseInt(Math.random() * this.state.colors.length),
      quote: parseInt(Math.random() * this.state.quotes.length)
    })
    document.getElementsByTagName("html")[0].style.setProperty("--rand-color", this.state.colors[this.state.color])
  }

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        quotes: [...responseData],
        color: parseInt(Math.random() * this.state.colors.length),
        quote: parseInt(Math.random() * responseData.length)
      })
    })
    .catch(err => console.log(err, err.data))

    // this.setState({
    //   color: parseInt(Math.random() * this.state.colors.length),
    //   quote: parseInt(Math.random() * this.state.quotes.length)      
    // })
    document.getElementsByTagName("html")[0].style.setProperty("--rand-color", this.state.colors[this.state.color])
  }

  render() {
    return (
      <main>
        <Quotes text={this.state.quotes[this.state.quote].text} author={this.state.quotes[this.state.quote].author} />
        <Buttons text={this.state.quotes[this.state.quote].text} author={this.state.quotes[this.state.quote].author} newQuote={this.newQuote} />
      </main>
    )
  }
}

export default App;
