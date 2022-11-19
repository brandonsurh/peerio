import React from "react";
import { TextField } from "@material-ui/core";
import storeFiles from "../ipfs_interface";

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        description: '',
        author: '',
        file: '',
        cid: ''
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

  handleFileUpload(event) {
    console.log("event", event)
    const file = event.target.files[0]
    this.state.fileName = event.target.files[0].name
  }

  async handleSubmit(event) {
    event.preventDefault();
    alert(this.state.description + "  " + this.state.author)
    const cid = await storeFiles(this.state.file)
    console.log("cid", cid)
    this.state.cid = cid

    // retrieve file data json, insert file infor and cid and reupload to ipfs 
  }


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
        <label>
            Upload file:
            <input 
                type="file" 
                value={this.state.fileName}
                onChange={this.handleFileUpload}
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UploadForm;