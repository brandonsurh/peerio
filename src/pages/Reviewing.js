import React from 'react'
import rev from '../assets/rev.png'
import Profile from '../assets/Profile.png'
import interests from '../assets/interests.png'
import b3 from '../assets/3.png'
function Reviewing(props) {
  return (
    <div>
      <img src={Profile} alt="rev" style={{ width: '100%' }} />
      <img src={interests} alt="rev" style={{ width: '100%' }} />
      <img src={b3} alt="rev" style={{ width: '100%' }} />
    </div>
  )
}

export default Reviewing
