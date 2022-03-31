import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favLinks:[]
    }
  }

  handleRemove = (index) => {
    this.setState((state) => ({
      favLinks: state.favLinks.filter((value, i) => i !== index)
  }))
  }

  handleSubmit = (favLink) => {
    this.setState((state) => ({
      favLinks: state.favLinks.concat([favLink])
  }))
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
            
        <Table linkData={this.state.favLinks} removeLink = {this.handleRemove}/>
        <br />
        <h3>Add New Links here!</h3>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
