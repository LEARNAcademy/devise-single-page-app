import React from "react"
import PropTypes from "prop-types"
import {
  Route,
  Switch
} from 'react-router-dom'


import Home from './pages/Home'
import Apartments from './pages/Apartments'

class PageRouter extends React.Component {
  render () {
    const{ loggedIn } = this.props
    return (
      <React.Fragment>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={(props) => <Home {...props} loggedIn={loggedIn} /> }
          />
          <Route 
            path="/apartments" 
            render={(props) => <Apartments {...props} loggedIn={loggedIn} /> }
          /> 
        </Switch>
      </React.Fragment>
    );
  }
}

export default PageRouter
