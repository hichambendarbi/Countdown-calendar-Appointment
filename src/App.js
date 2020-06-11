import React, { Component } from 'react';
import './App.css';
import Interview from './Interview';
import CountdownTestTersea from './CountdownTestTersea'

class App extends Component {
  render() {
    return (
      <div className="App">
           <Interview/>
           <div styled={{display: "flex"}}>
           <CountdownTestTersea timeTillDate="06 12 2020, 11:00 am" timeFormat="MM DD YYYY, h:mm a" />
           </div>
      </div>
    );
  }
}

export default App;
