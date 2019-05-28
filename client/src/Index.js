import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import BoxDropDown from './components/Dropdown.jsx';
import { Button } from 'reactstrap';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';


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
      <h1><center>Combi Pay & GO </center></h1>
       <div>
        <BoxDropDown name={this.state.departureStation} />

        <div class="row">
           <div class="col s1"></div>
           <div class="col s1"></div>
        </div>

       <div>
        <BoxDropDown name={this.state.arrivalStation} />
       </div>

       <div class="row">
          <div class="col s1"></div>
          <div class="col s1"></div>
      </div>

      </div>
         <div>
          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
           <i class="material-icons right"></i>
          </button>
       </div>


    </div>)

  }

}

ReactDOM.render(<App />, document.getElementById('app'));
