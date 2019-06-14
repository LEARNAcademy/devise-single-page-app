import React from "react"
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
  render () {
    const{ loggedIn } = this.props
    return (
      <React.Fragment>
        <h1>Hello From Home</h1>
        {loggedIn &&
          <Redirect to="/apartments" />
        }
      </React.Fragment>
    );
  }
}

export default Home
