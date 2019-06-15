import React from "react"
import PropTypes from "prop-types"
import {
  Route,
  Switch
} from 'react-router-dom'


import Home from './pages/Home'
import Apartments from './pages/Apartments'
import NewApartment from './pages/NewApartment'

class PageRouter extends React.Component {
  render () {
    const{
      apartments,
      handleNewApartment,
      loggedIn
    } = this.props
    
    return (
      <React.Fragment>
        {loggedIn &&
          <Switch>
            <Route 
              exact
              path="/" 
              render={(props) => <Apartments {...props} handleNewApartment= {handleNewApartment} apartments={apartments} /> }
            /> 
            <Route 
              exact
              path="/new-apartment"
              render={(props)=><NewApartment {...props} handleNewApartment={handleNewApartment} />}
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
