import React from "react";
import { TextField } from "@material-ui/core";
import storeFiles from "../ipfs_interface";

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        description: '',
        author: '',
        cid: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    alert(
        `Uploading file = ${this.fileInput.current.files[0].name}`
    );
    const file = this.fileInput.current.files
    const cid = await storeFiles(file)

    // for storing article information in DB
    const articleRecord = {
      "title": this.state.title,
      "description": this.state.description,
      "author": this.state.description,
      "cid": cid
    }
    console.log("article record", articleRecord)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField 
            name="title"
            label="enter title"
            value={this.state.title} 
            onChange={this.handleChange} 
        />
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
        <label>
            Upload file:
            <input 
                type="file" 
                ref={this.fileInput}
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UploadForm;