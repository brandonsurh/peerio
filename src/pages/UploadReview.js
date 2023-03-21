import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Upvote, Downvote, Subscribe } from '../lib/SmartContractMethods'
import { useParams } from 'react-router-dom'
import {
  Container,
  Chip,
  Card,
  LinearProgress,
  Checkbox,
  Button,
} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import '../styles/Explore.css'

function UploadReview(props) {
  const [loading, setLoading] = useState(false)
  const [approve, setApprove] = useState(false)
  const [comment, setComment] = useState('')
  const [commentLink, setCommentLink] = useState('')
  const navigate = useNavigate()
  let { articleId } = useParams()

  const upload = async () => {
    // const t = await Subscribe()
    let res
    if (approve) {
      res = await Upvote(articleId)
    } else {
      res = await Downvote(articleId)
    }
    if (res) {
      navigate('/submitted')
    }
  }
  return (
    <Container>
      <center>
        <Card
          style={{
            maxWidth: '500px',
            padding: '2rem',
            paddingBottom: '3rem',
            borderRadius: '13px',
            textAlign: 'start',
          }}
        >
          <p className="home-subtittle ">
            Upload review<span className="yellow-dot ">.</span>
          </p>
          <p>
            <label htmlFor="w3review">Approve*</label>
          </p>
          <Checkbox
            icon={<RadioButtonUncheckedIcon name="Yes" value="Yes" />}
            checkedIcon={<RadioButtonCheckedIcon name="Yes" value="Yes" />}
            name="Yes"
            value="Yes"
            checked={approve}
            onClick={() => setApprove(true)}
          />
          <span>Yes</span>
          <br />
          <Checkbox
            icon={<RadioButtonUncheckedIcon name="No" value="No" />}
            checkedIcon={<RadioButtonCheckedIcon name="No" value="No" />}
            name="No"
            value="No"
            checked={!approve}
            onClick={() => setApprove(false)}
          />
          <span>No</span>
          <br /> <br />
          {/*comment*/}
          <p>
            <label htmlFor="w3review">Add your motivation*</label>
          </p>
          <textarea
            className="create-profile-input"
            type="text"
            id="bio"
            name="comment"
            rows="4"
            cols="50"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          {/*link */}
          <p>
            <label htmlFor="fname">Attachment link (optional)</label>
          </p>
          <input
            type="text"
            id="location"
            name="location"
            placeholder=""
            value={commentLink}
            onChange={(e) => setCommentLink(e.target.value)}
            className="create-profile-input"
          ></input>
          <br />
          <br />
          {/* topics*/}
          <p>
            <label htmlFor="fname">Relevant topics.</label>
          </p>
          <div className="flex">
            <Chip label="Filecoin" variant="outlined" />
            <Chip label="Blochchain" variant="outlined" />
            <Chip label="Technology" variant="outlined" />
            <Chip label="Decentralized" variant="outlined" />
            <Chip label="peer-reviewing" variant="outlined" />
            <Chip label="Computing" variant="outlined" />
            <Chip label="Analyzing" variant="outlined" />
            <Chip label="Real-Data" variant="outlined" />
            <Chip label="Other" variant="outlined" />
          </div>
          <br />
          <br />
          <hr style={{ border: '1px solid #ccc' }} />
          <br />
          <br />
          {loading ? (
            <div className="">
              <LinearProgress />
            </div>
          ) : (
            ''
          )}
          <br />
          <center>
            <Button className="whiteLink">Nevermind</Button>
            <Button className="yellow-btn" variant="contained" onClick={upload}>
              Upload
            </Button>
          </center>
        </Card>
      </center>
    </Container>
  )
}

export default UploadReview
