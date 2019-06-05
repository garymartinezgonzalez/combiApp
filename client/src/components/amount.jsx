import React from 'react';
import ReactDOM from 'react-dom';
import PaypalButton from "./PaypalButton.jsx"

const Amount = (props) => (
  <div>
    <h2><center>Trip Total</center></h2>
   <div>
    <h2>
     <center>
      {props.price}
     </center>
    </h2> 
   </div>
    <div>
      <PaypalButton/>
    </div>
  </div>
);
export default Amount;
