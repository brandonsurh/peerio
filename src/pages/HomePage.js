import Header from '../components/Header'
import '../styles/HomePage.css'
import { Button, Container } from '@mui/material'
import Slider from '../components/Slider'

const Trending = () => {
  return null
  // TODO
}

const HomePage = () => {
  return (
    <div>
      <Container maxWidth="xl" style={{ paddingTop: '8rem' }}>
        <main className="homePageBody">
          <div className="getStartedBox">
            <br />
            <br />
            <p className="home-tittle ">
              Connect<span className="yellow-dot ">.</span> Review
              <span className="yellow-dot ">.</span>
            </p>

            <p className="home-tittle ">
              Publish<span className="yellow-dot ">.</span> Earn
              <span className="yellow-dot ">.</span>
            </p>
            <p className="home-subtittle">
              An app that allows you to submit and review scholary articles
            </p>
            <center>
              <Button
                variant="contained"
                className="yellow-btn"
                color="primary"
              >
                get started
              </Button>
            </center>
          </div>

          <div className="trending"></div>
        </main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="home-subtittle">Latest publications</p>
      </Container>

      <br />
      <br />
      <br />
      <br />

      <Slider />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default HomePage
