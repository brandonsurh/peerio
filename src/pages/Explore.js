import { Container, Chip, Card, TextField, MenuItem } from '@mui/material'
import PostList from '../components/PostList'
import '../styles/Explore.css'

function Explore(props) {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <Container maxWidth="xl">
        <p className="home-tittle">
          Research interests
          <span className="yellow-dot ">.</span>
        </p>
        <Chip label="Blochchain Technology" variant="outlined" />
        <Chip label="Decentralized peer-reviewing" variant="outlined" />
        <Chip label="Data-based applications" variant="outlined" />
        <Chip label="Giraffes" variant="outlined" />
        <Chip label="L2 Networks" variant="outlined" />
        <Chip label="DataDAOs" variant="outlined" />
        <Chip label="Computing and analyzing over" variant="outlined" />
        <Chip label="Add more..." variant="outlined" />

        <section id="gallery" className="gallery-container">
          <div className="outer">
            <form className="search-form" style={{ width: '100%' }}>
              <div className="outer pseudo-search">
                <input
                  type="text"
                  placeholder="Search title or author"
                  autofocus
                  required
                />
                <span className="search-clear">Clear</span>
                <span className="search-icon">🔍</span>
              </div>
            </form>

            <TextField
              fullWidth
              name="petType"
              select
              label="Sort by"
              variant="outlined"
              // onChange={(e) => setPetType(e.target.value)}
              defaultValue="All Departments"
              // ref={petTypeRef}
              style={{ paddingRight: '2rem' }}
              id="test"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Recent">☐ Recent</MenuItem>
              <MenuItem value="Last Week">☐ Last Week</MenuItem>
              <MenuItem value="Last Month">☐ Last Month</MenuItem>
              <MenuItem value="By year">☐ By year</MenuItem>
            </TextField>

            <TextField
              fullWidth
              name="petType"
              select
              label="Status"
              variant="outlined"
              // onChange={(e) => setPetType(e.target.value)}
              defaultValue="All"
              // ref={petTypeRef}
              id="test"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Awaiting Approval">☐ Awaiting Approval</MenuItem>
              <MenuItem value="Published">☐ Published</MenuItem>
            </TextField>
          </div>
          <br />
          {/* Post */}
          <Card
            style={{
              borderRadius: '24px',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}
          >
            <PostList />
          </Card>
        </section>
      </Container>
    </div>
  )
}

export default Explore
