import React from "react"
import PropTypes from "prop-types"
import ApartmentList from '../ApartmentList'

class Home extends React.Component {
  render () {
    const{ apartments } = this.props
    return (
      <React.Fragment>
        <h1>Hello From Home</h1>
        <ApartmentList apartments={apartments} />
      </React.Fragment>
    );
  }
}

export default Home
