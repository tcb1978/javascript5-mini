import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      console.log(res)
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    const {cars} = this.state
    let displayCars = cars.map((car, i) => {
      return <li key={i}>{car.model}</li>
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        <ul>{displayCars}</ul>
      </div>
    );
  }
}

export default App;
