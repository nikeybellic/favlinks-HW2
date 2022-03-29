import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:"",
      URL:""
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
  })
  }
  
  nameChange = (event)=>{
    this.setState({
        name: event.target.value
    })
  }

  urlLink = (event)=>{
    this.setState({
        URL: event.target.value
    })
  }

  onFormSubmit = (event) => {
    
    event.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
         name: "",
        URL: ""
    })
  }

  render() {
    return (
      <form submitForm ={this.onFormSubmit}>
            
            <label for = "name"> Name </label>

            <input type = "text"
            onClick = {this.nameChange}
            values = {this.state.name}
            />

           <label for = "URL"> URL </label>

              <input  type = "text"
                onClick ={this.urlLink}
                values = {this.state.URL}
                />
            
            <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
