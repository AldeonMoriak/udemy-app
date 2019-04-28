import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Aldeon', age: 27},
        { name: 'Adonel', age: 28},
        { name: 'Mehran', age: 29}
      ],
      showPersons: false
    };
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 27},
        { name: 'Adonel', age: 28},
        { name: 'Saeed', age: 29}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Aldeon', age: 27},
        { name: event.target.value, age: 28},
        { name: 'Saeed', age: 29}
    ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {

    const style = {
      backgroundColor: "khaki",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I am a React App</h1>
        </header>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons ?
          <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            changed={this.nameChangedHandler}
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}>Shit</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, 'Mehran!')}>Hobbies: Fucking, Playing Soccer and Playing Setar</Person>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
