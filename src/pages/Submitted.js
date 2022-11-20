import React from 'react'
import { useNavigate } from 'react-router-dom'
import rev from '../assets/submitted.png'
function Submitted(props) {
  const navigate = useNavigate()
  return (
    <center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        src={rev}
        alt="rev"
        style={{ width: '30%' }}
        onClick={() => navigate('/explore')}
      />
    </center>
  )
}

export default Submitted
