import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: "Aldeon", age: 27 },
        { name: "Adonel", age: 28 },
        { name: "Mehran", age: 29 }
      ],
      showPersons: false
    };
  }

  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Aldeon', age: 27 },
  //       { name: event.target.value, age: 28 },
  //       { name: 'Saeed', age: 29 }
  //     ]
  //   });
  // };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((el, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={el.name} 
            age={el.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I am a React App</h1>
        </header>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
