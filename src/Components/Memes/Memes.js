import { Button } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ParticleBG from "../ParticleBG";

const BASE_URI = " https://meme-api.com/gimme"
function Memes() {
    const [img,setImg] = useState('')
    const[disabled,setDisabled] = useState(false)
   
    const getMeme = async() =>{
        try { const response = await axios.get(BASE_URI)
        console.log(response.data)
        setImg(response.data.preview[2])}
        catch(err){
            getMeme()
        }
        setTimeout(() => {
            setDisabled(false)
        }, 6000);
    }

    useEffect(()=>{
        getMeme()
    },[])
  return (
<>
<ParticleBG />
    <Container>
        <img src={img}  />
        <br />
        <button onClick={()=>{
            getMeme();
            setDisabled(true);
            }} 
            disabled={disabled}>
                Get Another One
        </button>
        <Link to={"/"}>
        <Button  variant="outlined" style={{marginTop:30}}>
        take me back 
        </Button>
        </Link>
    </Container>
    </>
  )
}

export default Memes