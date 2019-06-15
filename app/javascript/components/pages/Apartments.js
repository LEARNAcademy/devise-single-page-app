import React from "react"
import PropTypes from "prop-types"

class Apartments extends React.Component {
  render () {
    const{ apartments } = this.props
    return (
      <React.Fragment>
        <h1>Hello from Apartments</h1>
        <table>
          <tr>
            <th>Address</th>
            <th>City</th>
          </tr>
          <tbody>
            {apartments.map((apartment)=>{
              return(
                <tr>
                  <td>{apartment.address_1}</td>
                  <td>{apartment.city}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Apartments
