import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import { useState, useEffect } from 'react'
import Research from '../assets/Research.png'

function PodcastCard({ post }) {
  const foward = (post) => {}

  // const foward = (podcast) => {
  //     Router.push({
  //         pathname: "/singlePodcast",
  //         query: {
  //             podcast: podcast.metadataURI,
  //             tokenId: podcast.id.toString(),
  //             creator: podcast.ownerAddress?.id || "",
  //             created: podcast.created,
  //             isOnSale: podSale?.isOnSale || false,
  //             auctionId: podSale?.auctionId || 0,
  //             reservePrice: podSale?.amount || 0,
  //         },
  //     });
  // };

  // useEffect(() => {
  //     updateUI();
  // }, [account]);

  return (
    <div style={{ cursor: 'pointer' }}>
      <Card onClick={() => foward(post)} style={{ background: '#FFBE24' }}>
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
            style={{ height: '300px', width: '300px', borderRadius: '22px' }}
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
    </div>
  )
}

export default PodcastCard
