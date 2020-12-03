import React from 'react';
import Quotes from './components/quote';
import Buttons from './components/buttons';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {    
    //document.getElementsByTagName("html")[0].style.setProperty("--rand-color", colors[color])
  

  return (
    <Provider store={store}>
      <main>
        <Quotes />
        <Buttons />
      </main>
    </Provider>
  )  
}

export default App;
