import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:"",
      URL:""
    }
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
    const name = event.target.name.value
    const url = event.target.URL.value
    let newLink = {name: name, URL: url}
    this.props.handleSubmit(this.state)
    this.setState({
         name: "",
        URL: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
          <label>Name</label>
          <input name="name" id="name" type="text" value={this.state.name}  onChange={this.nameChange}/>
          <label>URL</label>
          <input name="URL" id="URL" type="url" value={this.state.URL} onChange={this.urlLink}/>
          <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
