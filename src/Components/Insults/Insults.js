import { Button, Typography,Card,TextField} from "@mui/material";
import { Container, height } from "@mui/system";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ParticleBG from "../ParticleBG";
import './Insults.css'


const BASE_URI = "https://insults.tr00st.co.uk" 
function Insults() {
    const [badPerson,setBadPerson] = useState('')
    const [insult,setInsult] = useState('')
    const [isCustom,setIscustom] = useState(false)

    const getInsults = async () =>{
        try {
               const response =  await axios.get(`${BASE_URI}/your_mom/`)
              setInsult(response.data)
        } catch (error) {
            console.log(error);// 
        }
    }
    useEffect(()=>{
        getInsults();
    },[])

    const customInsult = async () =>{
        if(!badPerson){
            // alert('s')
            setIscustom(false)
        }else{
            setIscustom(true)
        }
        try {
            const response =  await axios.get(`${BASE_URI}/phrases/simple/?target=${badPerson}`)
        setInsult(response.data)
     } catch (error) {
         console.log(error);
     }
    }
const getAnotherInsult = () =>{
    if(isCustom) {
        if(!badPerson){
            getInsults()
        }
        customInsult()
    }else{
        getInsults()
    }
}

// const theme = createTheme();

// theme.spacing(2)

  return (
    <>
    <ParticleBG/>
    <Container  maxWidth="sm" className="baseContainer">
      <Typography variant="h4"> 
      {insult}
      </Typography>
      <br />
      <Button  variant="outlined" onClick={getAnotherInsult}>Get Another One</Button>
      <br /> <br />
      <Typography variant="h5">who do you want to insult tell me a name: </Typography>
      <br />
      <TextField   
        type="text"
        label="To Be Insulted"
        value={badPerson}
        onChange={(e)=>setBadPerson(e.target.value)}
        sx={{
            width: { sm: 200, md: 300 },
            "& .MuiInputBase-root": {
                height: 50
            },
            "& .MuiInputLabel-root": {color: 'lightblue'},
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "lightblue" },
              input: { color: "lightblue" } ,
            },
          }}
        variant="outlined"
        className="input"
        id="outlined-basic"
       />
      <Button variant="outlined" onClick={badPerson ? customInsult : getAnotherInsult} style={{marginLeft:20,marginTop: 10}} >insult {badPerson}</Button>
      <br /><br />
      <Link to={"/"}>
        <Button  variant="outlined">
        take me back 
        </Button>
        </Link>
      </Container>
    </>
  )
}

export default Insults