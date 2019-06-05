import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home.jsx"
import Payments from "./components/payments.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   }

  }

   render () {
    return (
      < BrowserRouter  >
      <div>
        <Switch>
        <Route exact path='/' component={Home} />
          <Route path='/payments' component={Payments} />
          </Switch>
          </div>

      </ BrowserRouter>
     )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
