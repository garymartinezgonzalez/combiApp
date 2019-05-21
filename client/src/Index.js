import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import BoxDropDown from './components/Dropdown.jsx';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departureStation: "Departure",
      arrivalStation: "Arrival",

    }
  }

   render () {
    return (
    <div>
      <h1><center>The Combi App</center></h1>
       <div>
        <BoxDropDown name={this.state.departureStation} />
          <center><BoxDropDown name={this.state.arrivalStation} /></center>
       </div>
      
    </div>)

  }

}

ReactDOM.render(<App />, document.getElementById('app'));
