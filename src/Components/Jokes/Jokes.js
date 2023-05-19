import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react"
import ParticleBG from "../ParticleBG";
import { Container } from "@mui/system";
import { Typography,Card, Button, Box } from "@mui/material";
import { Input } from "@mui/base";


const BASE_URI = "https://v2.jokeapi.dev/joke"
function Jokes() {
    const [joke,setJoke] = useState('')
    const [twoJoke,setTwoJoke] = useState([])
    const [custom,setCustom] = useState(false)
    const [twopart,setTwoPart] = useState(false)
    const [dark,setDark] = useState(false);
    const [programming,setProgramming] = useState(false)

  const getRandomJoke = async(filter)=>{//string
    try {
      const response = await axios.get(`${BASE_URI}/${typeof(filter) == "string" ? filter : "Any"}?type=single`)
      if(response.data.joke){
        setJoke(response.data.joke)
      }else{
        getRandomJoke(filter)
      }
      
    } catch (error) {
      getRandomJoke(filter)
    }
  }
  const getTwoLinerJoke = async(filter) =>{
    try {
      const response = await axios.get(`${BASE_URI}/${typeof(filter) == "string" ? filter : "Any"}?type=Any?type=twopart`)
      if(response.data.setup, response.data.delivery){
        setTwoJoke([response.data.setup,response.data.delivery])
      }else{
      getTwoLinerJoke(filter)
      }
    } catch (error) {
      getTwoLinerJoke(filter)
    }
  }
  const handleFilters = (e) =>{
    e.preventDefault()
    if(!dark && !programming){
      setCustom(false)
      twopart ? getTwoLinerJoke() : getRandomJoke()
    }else if (dark && programming ){
      setCustom(true)
      twopart ? getTwoLinerJoke('Programming,Dark') : getRandomJoke('Programming,Dark')
    }else if(dark && !programming){
      setCustom(true)
      twopart ? getTwoLinerJoke('Dark') : getRandomJoke('Dark')
    }else if(!dark && programming){
      setCustom(true)
      twopart ? getTwoLinerJoke('Programming') : getRandomJoke('Programming')
    }
    
  }
  const toggleJokes = () =>{
    if(twopart){
      setTwoPart(false)
      getRandomJoke()
    }else{
      setTwoPart(true)
      getTwoLinerJoke()
    }
  }

  useEffect(()=>{
    getRandomJoke()
  },[])
    
  return (
    <>
    <ParticleBG />
    <Container maxWidth="md">
    <Card variant="outlined" style={{marginTop:30,backgroundColor:"black",color:"white"}}>
    {!twopart &&<Typography variant="h4">
        {joke}
        </Typography> }
        <br />
        {twopart && <>
          <Typography variant="h5">
            {twoJoke[0]}
          </Typography>
          <Typography variant="h5">
            {twoJoke[1]}
          </Typography>
          </>
          }
    </Card>
          <Container maxWidth="lg">
        <Button 
          variant="outlined" 
          onClick={custom ? handleFilters : twopart ? getTwoLinerJoke: getRandomJoke} 
          style={{marginRight:20}}>get Another One</Button>
        <Button variant="outlined" onClick ={toggleJokes}>get {twopart ? "One  liner" : "Two Liner" } Joke</Button>
        </Container>
        <Box style={{marginTop:20}}> 
          <Typography variant="h5">select a catagory below the submit to filter</Typography>
          <form onSubmit={handleFilters}>
            {/* <label htmlFor="dark">Dark</label> */}
            <Typography variant="h5">Dark</Typography>
            <Input type="checkbox" name="dark"  onClick={()=>setDark(!dark)}/>
            {/* <label htmlFor="dark">programming</label> */}
            <Typography variant="h5">programming</Typography>
            <Input type="checkbox" name="dark"  onClick={()=>setProgramming(!programming)}/>
            {/* <Input type="submit" name="submit" /> */}
            <Button type="submit" variant="outlined">submit</Button>
          </form>
        </Box>
        <Link to={"/"}>
        <Button  variant="outlined" style={{marginTop:30}}>
        take me back 
        </Button>
        </Link>
    </Container>
    </>
  )
}

export default Jokes