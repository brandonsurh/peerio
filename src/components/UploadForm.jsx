import React from "react";
import { TextField } from "@material-ui/core";

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        description: '',
        author: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
  }

  handleSubmit(event) {
    alert(this.state.description + "  " + this.state.author)
    event.preventDefault();
  }

  // TODO: function to upload to ipfs 
  // TODO: insert pointer to ipsf file and add to ipfs files json with other file data

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField 
            name="description"
            label="enter description"
            value={this.state.description} 
            onChange={this.handleChange} 
        />
        <TextField 
            name="author"
            label="enter author"
            value={this.state.author} 
            onChange={this.handleChange} 
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UploadForm;