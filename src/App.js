import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import ConversationList from './ConversationList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConversationList />
      </div>
    );
  }
}

export default App;
