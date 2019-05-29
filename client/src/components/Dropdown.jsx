import React,{ Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';



class BoxDropDown extends Component {
  constructor(props) {
   super(props);

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
         <DropdownItem>Indios Verdes</DropdownItem>
         <DropdownItem>San Rafael</DropdownItem>
         <DropdownItem>Ciudad Azteca</DropdownItem>
         <DropdownItem/>
         <DropdownItem>Another Action</DropdownItem>
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
  toggle: PropTypes.func
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
