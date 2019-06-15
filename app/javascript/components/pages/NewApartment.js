import React from "react"
import PropTypes from "prop-types"
import { 
  Link,
  Redirect
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class NewApartment extends React.Component {
  constructor(props){
    super(props)
    this.initialState = {
       attrs: {
        address_1: '',
        city: ''
      },
      createSuccess: false
    }
    this.state = this.initialState
  }
  
  handleChange = (event)=>{
    const { attrs } = this.state  
    attrs[event.target.name] = event.target.value
    this.setState({ attrs })
  }
  
  newApartment = ()=>{
    const{ handleNewApartment } = this.props
    const{ attrs } = this.state
    handleNewApartment(attrs)
    .then(()=>{
      const newState = this.initialState 
      newState.createSuccess = true
      this.setState(newState)
    })
    //we would need to handle error situations here
    //like showing validation errors
  }
  
  render () {
    const{ createSuccess, attrs } = this.state
    return (
      <React.Fragment>
        {createSuccess &&
          <Redirect to="/" />
        }
        <h1>New Apartment</h1>
        <FormGroup>
          <Label for="address_1">Address</Label>
          <Input 
            type="text" 
            name="address_1"
            onChange={this.handleChange}
            value = {attrs.address_1}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input 
            type="text" 
            name="city" 
            onChange={this.handleChange}
            value = {attrs.city}
          />
        </FormGroup>

        <Button onClick={this.newApartment}> Save</Button>
        <Link to='/apartments' className='btn btn-warning'> Cancel</Link>
      </React.Fragment>
    );
  }
}

export default NewApartment
