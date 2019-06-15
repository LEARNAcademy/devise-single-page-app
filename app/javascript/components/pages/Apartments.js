import React from "react"
import PropTypes from "prop-types"
import { Button } from 'reactstrap'

import ApartmentList from '../ApartmentList'

class Apartments extends React.Component {
  newApartment = ()=>{
    const{ handleNewApartment } = this.props
    handleNewApartment({address_1: '123 Holly Ln.', city: 'Cedarburg'})
  }
  render () {
    const{ apartments } = this.props
    return (
      <React.Fragment>
        <h1>Hello from Apartments</h1>
        <ApartmentList apartments={apartments} />
        <Button onClick={this.newApartment}> New Apartment</Button>

      </React.Fragment>
    );
  }
}

export default Apartments
