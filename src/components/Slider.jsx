import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import PodcastCard from '../components/PostCard'
import '../styles/Header.css'

const Slider = () => {
  const [data, setData] = useState([
    {
      title: 'FEVM Use Cases',
      author: 'Vitalik',
      status: 'Awaiting Approval',
    },
    {
      title: 'FEVM Use Cases',
      author: 'Vitalik',
      status: 'Awaiting Approval',
    },
    {
      title: 'FEVM Use Cases',
      author: 'Vitalik',
      status: 'Awaiting Approval',
    },
    {
      title: 'FEVM Use Cases',
      author: 'Vitalik',
      status: 'Awaiting Approval',
    },
  ])
  return (
    <div className="slide-container">

      <Grid
        className="p-16"
        container
        spacing={{ xs: 2, md: 8 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data ? (
          data.map((post, index) => (
            <Grid item md={3} key={index}>
              <PodcastCard post={post} />
            </Grid>
          ))
        ) : (
          <h2>No post Yet...</h2>
        )}
      </Grid>
    </div>
  )
}

export default Slider
