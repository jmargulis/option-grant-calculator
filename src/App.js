import React from 'react';
import './App.css';
import Grants from './components/Grants';
import Actions from './components/Actions';
import ExitInfo from './components/ExitInfo';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <header>
          <h1>Option Grant Calculator</h1>
        </header>
        <Grants/>
        <Actions/>
        <ExitInfo exit={{exitValue:'', exitDate: new Date()}}/>
      </div>
    );
  }
}

export default App;
