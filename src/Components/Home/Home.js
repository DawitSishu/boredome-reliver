import { Button } from '@mui/material';
import { Container, Stack ,ButtonBase} from '@mui/system';
import React from 'react'
import { Link } from "react-router-dom";
import ParticleBG from '../ParticleBG';
import './Home.css'

function Home() {
  
  return (
    // <div>
    <>
    <ParticleBG />
        <Container maxWidth="sm" className="baseContainer">
      <Stack spacing={2} >
      <Link to={"insults"} className="link">
      <Button variant="outlined">
     insult me
      </Button>
      </Link>
      <Link to={"/quotes"} className="link">
      <Button variant="outlined">
      show me quotes
      </Button>
      </Link>
      <Link to={"/memes"} className="link">
      <Button variant="outlined">
        show me memes
      </Button>
        </Link>
      <Link to={"/jokes"} className="link">
      <Button variant="outlined">
        tell me a joke
      </Button>
        </Link>
      </Stack>
        </Container>
        </>
        // </div>

  )
}

export default Home