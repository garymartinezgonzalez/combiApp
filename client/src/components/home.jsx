import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BoxDropDown from './Dropdown.jsx';
import { Button } from 'reactstrap';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import combiData from '../Data.js';
import Amount from "./amount.jsx";
import { Link } from 'react-router-dom';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departureStation: "Departure",
      arrivalStation: "Arrival",
      stops: [],
      price:undefined,
   }
   this.combiData = combiData
   this.updateStation = this.updateStation.bind(this)
   this.updateArrival = this.updateArrival.bind(this)
  }
  updateStation (station) {
    this.setState({departureStation: station.direction,stops:station.stops})
  }

  updateArrival (station) {
    this.setState({arrivalStation: station.direction,price:station.price})
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

          <Link  to={{
            pathname: '/payments',
            state: { message: this.state.price }
          }}  >
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right"></i>
          </button>
          </Link>

          </div>
          </div>


        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d681425.3249357534!2d-99.42564335639938!3d19.35275023760555!3m2!1i1024!2i768!4f13.1!2m1!1sestaciones+de+combis+en+el+estado+de+mexico!5e0!3m2!1sen!2smx!4v1558457660696!5m2!1sen!2smx" width={'1250'} height={'500'} frameBorder={'0'}  allowFullScreen></iframe>




    </div>)

  }

}

export default Home;
