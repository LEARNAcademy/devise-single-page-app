import React from "react";
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

import ApartmentList from '../ApartmentList';

class Apartments extends React.Component {
  render () {
    const{ apartments } = this.props;
    return (
      <React.Fragment>
        <h1>Hello from Apartments</h1>
        <Link to='/new-apartment' className="btn btn-primary">New Apartment</Link>
        <ApartmentList apartments={apartments} />

      </React.Fragment>
    );
  }
}

export default Apartments
