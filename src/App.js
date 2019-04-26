import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I am a React App</h1>
      </header>
      <Person name="Aldeon" age="27"/>
      <Person name="Adonel" age="27" >Shit</Person>
      <Person name="Saeed" age="29">Hobbies: Fucking, Playing Soccer and Playing Setar</Person>
    </div>
  );
}

export default App;
