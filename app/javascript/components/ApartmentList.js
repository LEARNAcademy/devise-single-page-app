import React from "react"
import PropTypes from "prop-types"
class ApartmentList extends React.Component {
  render () {
    const{ apartments } = this.props
    return (
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              <th>Address</th>
              <th>City</th>
            </tr>
            {apartments.map((apartment)=>{
              return(
                <tr key={apartment.id} >
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

export default ApartmentList
