import React from "react"
import PropTypes from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

import{ Link } from 'react-router-dom'
  
class TopNav extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    const{ 
      loggedIn,
      signInRoute,
      signOutRoute
    } = this.props
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Learn Apartments</NavbarBrand>
            <Nav className="ml-auto" navbar>
                {loggedIn &&
                  <React.Fragment>  
                  <NavItem>
                    <NavLink tag={Link} to='/apartments'>Apartments</NavLink> 
                  </NavItem>
                  <NavItem>
                    <NavLink href={signOutRoute}>Logout</NavLink>
                  </NavItem>
                  </React.Fragment>  
                }
                {!loggedIn &&
                  <NavItem>
                    <NavLink href={signInRoute}>Login</NavLink>
                  </NavItem>
                }
            </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default TopNav
