import React from 'react'
import TextField from '@mui/material/TextField'
import '../styles/Upload.css'
import storeFiles from '../ipfs_interface'
import { ProposeReview } from './SmartContractMethods'

class UploadForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      author: '',
      cid: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fileInput = React.createRef()
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
    console.log(
      '🚀 ~ file: UploadForm.jsx ~ line 30 ~ UploadForm ~ handleChange ~ this',
      this.state,
    )
  }

  async handleSubmit(event) {
    event.preventDefault()
    alert(`Uploading file = ${this.fileInput.current.files[0].name}`)
    const file = this.fileInput.current.files
    let res = await ProposeReview(this.state.title)
    const cid = await storeFiles(file)

    // for storing article information in DB
    const articleRecord = {
      title: this.state.title,
      description: this.state.description,
      author: this.state.description,
      cid: cid,
    }
    console.log('article record', articleRecord)
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          maxWidth: '500px',
          padding: '2rem',
          paddingBottom: '3rem',
          borderRadius: '13px',
          textAlign: 'start',
        }}
      >
        <h1>Upload a file</h1>
        <p>
          <label htmlFor="w3review">Enter title</label>
        </p>
        <TextField
          className="create-profile-input"
          name="title"
          label=""
          value={this.state.title}
          onChange={this.handleChange}
        />

        <p>
          <label htmlFor="w3review">Enter description</label>
        </p>
        <TextField
          className="create-profile-input"
          name="description"
          label=""
          value={this.state.description}
          onChange={this.handleChange}
        />

        <p>
          <label htmlFor="w3review">Enter author</label>
        </p>
        <TextField
          className="TextField"
          name="author"
          label=""
          value={this.state.author}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <br />
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>

        <br />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default UploadForm
