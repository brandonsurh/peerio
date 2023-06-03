import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import '../styles/Upload.css'
import storeFiles from '../ipfs_interface'
import { ProposeReview } from '../components/SmartContractMethods'
import { render } from '@testing-library/react'

// cids= [cid1,cid2 ]

class UploadPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      author: '',
      cid: '',
      tx: '',
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
  }

  async handleSubmit(event) {
    console.log(this.state)
    event.preventDefault()
    alert(`Uploading file = ${this.fileInput.current.files[0].name}`)
    const file = this.fileInput.current.files
    let res = await ProposeReview(this.state.title)
    if (res) {
      this.setState({ tx: res?.hash })
    }
    const cid = await storeFiles(file)
    // for storing article information in DB
    const articleRecord = {
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      cid: cid,
    }
    console.log('article record', articleRecord)
  }

  render() {
    return (
      <center>
        {this.state.tx ? (
          <div className="confirmation">
            <p className="confirmation-tittle">
              Upload Successful<span className="dot-yello">.</span>
            </p>
            <p className="confirmation-p">Thank you for contributing! </p>
            <p className="confirmation-p">
              Your file will be up for review shortly.
            </p>
            <br />
            <br />
            <Button className="btn-yello">
              <a
                href={`https://hyperspace.filfox.info/en/tx/${this.state.tx}`}
                target="_blank"
                rel="noreferrer"
              >
                See details
              </a>
            </Button>
          </div>
        ) : (
          <form
            onSubmit={this.handleSubmit}
            style={{
              maxWidth: '500px',
              padding: '2rem',
              paddingBottom: '6rem',
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
        )}
      </center>
    )
  }
}

export default UploadPage
