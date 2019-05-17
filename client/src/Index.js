import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
import BoxDropDown from './components/Dropdown.jsx';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  //
  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

   render () {
    return (<div>
      <h1><center>The Combi App</center></h1>
      <BoxDropDown />
    </div>)

  }

}

ReactDOM.render(<App />, document.getElementById('app'));
