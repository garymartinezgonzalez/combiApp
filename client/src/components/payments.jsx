import React from 'react';
import Amount from './amount.jsx'

class Payments extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
   };
 }

 render() {

   return (
    <div>
      <h1><center>Payments</center></h1>
     <div>
      <Amount price={this.props.location.state.message}/>
     </div>
    </div>
   );
 }
}
export default Payments
