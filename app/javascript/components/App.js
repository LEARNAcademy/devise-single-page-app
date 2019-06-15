/* global fetch */

import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router } from 'react-router-dom'

import TopNav from './TopNav'
import PageRouter from './PageRouter'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
    
    this.getApartments()
  }
  
  getApartments = () =>{
    return fetch("/apartments",{
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((response)=> response.json())
    .then((json)=>{
      this.setState({apartments: json})
      return new Promise(function(resolve) {
        return resolve()
      })
    })
  }
  
  createApartment = (apartment) => {
    return fetch("/apartments", {
      headers:{
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ apartment })
    })
    .then((response)=> response.json())
    .then((json)=>{
      return this.getApartments()
    })
  }
  
  render () {
    const{ 
      apartments
    } = this.state
    const {
      logged_in, 
      sign_in_route, 
      sign_out_route
    
    } = this.props
    
    return (
      <React.Fragment>
        <Router>
          <TopNav 
            loggedIn={logged_in}
            signInRoute={sign_in_route}
            signOutRoute={sign_out_route}
          />
          <PageRouter 
            loggedIn={logged_in}
            apartments={apartments}
            handleNewApartment={this.createApartment}
          />
        </Router>
      </React.Fragment>
    );
  }
}

export default App
