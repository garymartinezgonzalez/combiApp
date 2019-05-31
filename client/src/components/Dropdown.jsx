import React,{ Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';



class BoxDropDown extends Component {
  constructor(props) {
   super(props);
   this.gary= "hey",
   this.combiData = [
     {

       route: "Indios Verdes",
       stops:[
         "El Angel",
         "Hamburgo",
         "Paris",
         "El Caballito",
         "Gloriteta Violeta",
       ]
     }
   ];
   this.toggle = this.toggle.bind(this);
   this.state = {
     dropdownOpen: false
   };
 }

 toggle() {
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }

 render() {
   return (
     <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
       <DropdownToggle caret>
        {this.props.name}
       </DropdownToggle>
       <DropdownMenu>
         <DropdownItem onClick={()=>this.props.updateRouteName("Indios Verdes")}> Indios Verdes </DropdownItem>
         <DropdownItem onClick={()=>this.props.updateRouteName("San Rafael")}> San Rafael </DropdownItem>
         <DropdownItem onClick={()=>this.props.updateRouteName("Ciudad Azteca")}> Ciudad Azteca </DropdownItem>
       </DropdownMenu>
     </ButtonDropdown>
   );
 }
}

ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func,
  route: PropTypes.string,
  stops: PropTypes.string
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
};


  export default BoxDropDown;
