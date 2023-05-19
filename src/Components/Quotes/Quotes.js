import { Container, Typography,Button,Card } from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ParticleBG from "../ParticleBG";

const BASE_URI ="https://api.quotable.io"
function Quotes() {
    const [quote,setQuote] = useState('')
    const [author, setAuthor] = useState('')

    const getOneQuote = async () =>{
        const response =  await axios.get(`${BASE_URI}/random`)
        setQuote(response.data.content)
        setAuthor(response.data.author)   
    }

  useEffect(()=>{
    getOneQuote()
  },[])


  return (
    <>
    <ParticleBG />
    <Container maxWidth="md">
    <Card variant="outlined" style={{marginTop:30,backgroundColor:"black",color:"white"}}>
        <Typography variant="h4">
        "{quote}"
        </Typography>
        <br />
        <Typography variant="h5">
            -Written by : {author}
        </Typography>
    </Card>
      <Button variant="outlined" onClick={getOneQuote} style={{marginTop:30,marginRight:40}} >
        Get another One
      </Button>
        <Link to={"/"}>
        <Button  variant="outlined" style={{marginTop:30}}>
        take me back 
        </Button>
        </Link>
    </Container>
    </>
  )
}

export default Quotes