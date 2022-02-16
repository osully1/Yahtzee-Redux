import React from 'react';
import './App.css';
import GameTable from './components/GameTable/GameTable'

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <GameTable />
      </header>
    </div>
  );
}

export default App;
