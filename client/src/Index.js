import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import BoxDropDown from './components/Dropdown.jsx';
import { Button } from 'reactstrap';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import combiData from './Data.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departureStation: "Departure",
      arrivalStation: "Arrival",
      stops: [],
   }
   this.combiData = combiData
   this.updateStation = this.updateStation.bind(this)
   this.updateArrival = this.updateArrival.bind(this)
  }
  updateStation (station) {
    this.setState({departureStation: station.direction,stops:station.stops})
  }

  updateArrival (station) {
    this.setState({arrivalStation: station.direction})
  }
   render () {
    return (
     <div>

      <h1><center>Combi Pay & GO</center></h1>
      <div className="row">
        <div className="col s4">
         <div>
          <BoxDropDown name={this.state.departureStation} updateRouteName={this.updateStation} stations={this.combiData} />
        </div>
        </div>
        <div className="col s4">
          <div>
            <BoxDropDown name={this.state.arrivalStation} updateRouteName={this.updateArrival} stations={this.state.stops} />
          </div>
        </div>
        <div className="col s4">
          <div>
          <div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right"></i>
            </button>
          </div>

          </div>
        </div>
      </div>
    </div>)

  }

}

ReactDOM.render(<App />, document.getElementById('app'));
