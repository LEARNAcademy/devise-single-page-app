import React from "react"
import PropTypes from "prop-types"
import TableRow from './TableRow'
class App extends React.Component {
  render () {
    const {
      logged_in, 
      sign_in_route, 
      sign_out_route
    
    } = this.props
    
    return (
      <React.Fragment>
        <h1>Hello Bravo</h1>
        <h2>- your friend React</h2>
        {logged_in &&
          <div>
            <h3>You are logged in</h3>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <h3>You are not logged in</h3>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        
        <table>
          <tbody>
           <TableRow />
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App
