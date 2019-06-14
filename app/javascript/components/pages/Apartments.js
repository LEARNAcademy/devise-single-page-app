import React from "react"
import PropTypes from "prop-types"

import { Redirect } from 'react-router-dom'
class Apartments extends React.Component {
  render () {
    const{ loggedIn } = this.props
    return (
      <React.Fragment>
        <h1>Hello from Apartments</h1>
        {!loggedIn &&
          <Redirect to="/"/>
        }
      </React.Fragment>
    );
  }
}

export default Apartments
