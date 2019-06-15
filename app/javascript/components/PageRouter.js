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
    const{
      apartments,
      loggedIn
    } = this.props
    
    return (
      <React.Fragment>
        {loggedIn &&
          <Switch>
            <Route 
              path="/" 
              render={(props) => <Apartments {...props} apartments={apartments} /> }
            /> 
          </Switch>
        }
        {!loggedIn &&
          <Switch>
            <Route 
              path="/" 
              render={(props) => <Home {...props} apartments={apartments} /> }
            />
          </Switch>
        }
      </React.Fragment>
    );
  }
}

export default PageRouter
