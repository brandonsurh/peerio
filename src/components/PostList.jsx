import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase.config';
import { collection, doc, updateDoc, getDocs, addDoc } from 'firebase/firestore';
import '../styles/PostList.css'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material'
import Research from '../assets/Research.png'

function PostList({ account, contractData, setSelectedProfile }) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [proposals, setProposals] = useState([])
  // const history = useHistory()
  const [profiles, setProfiles] = useState([
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

  useEffect(() => {
    // const loaddata = async () => {
    //   try {
    //     setLoading(true)
    //     const getAllProfiles = await displayAll()
    //     console.log(getAllProfiles)
    //     setProfiles([])
    //     // setProfiles(getAllProfiles)
    //     setLoading(false)
    //   } catch (error) {
    //     console.log(error)
    //     setLoading(false)
    //   }
    // }
    // loaddata()
  }, [])

  const details = (profile) => {
    console.log('here profile', profile.address)
    // localStorage.removeItem('selectedProfile')
    // localStorage.setItem('selectedProfile', profile)
    // setSelectedProfile(profile)
    // history.push(`/profile/details/${profile.address}`)
  }

  return (
    <div
      style={{
        minHeight: '60vh',
        borderRadius: '24px',
        background: '#97999D',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Grid container spacing={6} style={{ marginLeft: '2.9rem' }}>
            {/*

            TO FETCH
            profiles= [cid1, cid2, cid3 ]
            call ipfs & get data
            display

            TO PUSH CIDS
            const cid = "from ipfs"
            save it to firebase

            */}
            {profiles.length ? (
              profiles.map((post, index) => (
                <Grid item spacing={1} className="swap-card" key={index}>
                  <Card
                    onClick={() => navigate('/reviewpage')}
                    style={{ background: '#FFBE24', padding: '3rem' }}
                  >
                    <CardContent>
                      <Typography
                        fontSize="20px"
                        style={{
                          fontWeight: '600',
                          lineHeight: '30px',
                        }}
                        color="#ffffff"
                      >
                        {post.title}
                      </Typography>
                    </CardContent>
                    <center>
                      <CardMedia
                        component="img"
                        image={Research}
                        alt="Profile"
                        style={{
                          height: '300px',
                          width: '300px',
                          borderRadius: '22px',
                        }}
                      />
                    </center>

                    <CardContent>
                      <Typography
                        fontSize="20px"
                        style={{
                          fontWeight: '600',
                          lineHeight: '30px',
                        }}
                        color="#ffffff"
                      >
                        Author: {post.author}
                      </Typography>
                      <Typography
                        fontSize="15px"
                        color="#ffffff"
                        style={{
                          fontWeight: '300',
                          lineHeight: '30px',
                        }}
                      >
                        Status: {post.status}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <h2>No Post Yet...</h2>
            )}
          </Grid>
        </div>
      )}
    </div>
  )
}

export default PostList
