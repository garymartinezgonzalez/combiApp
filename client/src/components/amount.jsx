import React from 'react';
import ReactDOM from 'react-dom';
import PaypalButton from "./PaypalButton.jsx"

const Amount = (props) => (
  <div>
    <h1>Trip Total</h1>
    <div>
      {props.price}
    </div>
    <div>
      <PaypalButton/>
    </div>
  </div>
);
export default Amount;
